require('should');
const config = require('config');
const supertest = require('supertest');
const express = require('express');
const app = require('../../app');
const request = supertest(app);
const superAgent=require('superagent');
const spyOn=require('jasmine');
const  apiService=require('../../controller/api-service');

describe('api-service', () => {
   
});