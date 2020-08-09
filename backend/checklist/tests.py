# -*- coding: utf-8 -*-
from rest_framework import status
from rest_framework.test import APITestCase
from rest_framework.authtoken.models import Token
from rest_framework.test import RequestsClient
from rest_framework.test import APIClient
from django.contrib.auth.models import User
from items.models import Item
import datetime

class AuthenticateTest(APITestCase):
    def setUp(self):
        self.username = 'joe'
        self.password = 'secret'
        self.email = 'joetest123@gmail.com'

        self.user = User.objects.create(
            username=self.username, 
            email=self.email,
            is_active=True
        )

        self.user.set_password(self.password)
        self.user.save()

    def test_invalid_credentils_does_not_return_token(self):
        post_data = {
            'username': self.username,
            'password': 'test1234'
        }

        response = self.client.post('/api/v1/token-auth/', data=post_data, format='json')

        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(response.data['non_field_errors'][0], 'Unable to log in with provided credentials.')

    def test_token_auth_returns_token(self):
        post_data = {
            'username': self.username,
            'password': self.password
        }

        response = self.client.post('/api/v1/token-auth/', data=post_data, format='json')

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertNotEqual(response.data.get('token'), None)

class ItemListTest(APITestCase):
    def setUp(self):
        self.username = 'joe'
        self.password = 'secret'
        self.email = 'joetest123@gmail.com'
        self.user = User.objects.create(
            username=self.username, 
            email=self.email,
            is_active=True
        )

        self.user.set_password(self.password)
        self.user.save()

        self.token = Token.objects.create(user=self.user)
        self.token.save()

        due_date = datetime.datetime.now() + datetime.timedelta(weeks=3)
        Item.objects.create(title='Clean Pool', description='Clean the Pool', user=self.user, due_date=due_date)
        Item.objects.create(title='Clean Bathroom', description='Clean the Bathroom', user=self.user, due_date=due_date)

    def test_cannot_view_checklist_if_not_logged_in(self):
        response = self.client.get('/api/v1/checklist/')
        
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_can_view_checklist_if_logged_in(self):
        self.client.force_authenticate(user=self.user)
        self.client.credentials(HTTP_AUTHORIZATION='Token ' + self.token.key)
        
        response = self.client.get('/api/v1/checklist/')
        
        self.assertEqual(response.status_code, status.HTTP_200_OK)
