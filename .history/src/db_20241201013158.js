const express = requrie("express");
const http = require('http');
const bcrypt = require('bcrypt');
const path = require('path');
const multer = require('multer');
const session = require('express-session');
const mongoose = require('mongoose');


const app = express();
const server = http.createServer(app);