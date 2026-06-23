# CI/CD Pipeline to Deploy Node.js Application

## Overview

This project demonstrates the implementation of a Continuous Integration and Continuous Deployment (CI/CD) pipeline for a Node.js application using AWS services. The pipeline automatically fetches source code from GitHub, builds the application using AWS CodeBuild, and deploys it to an Amazon EC2 instance.

## AWS Services Used

* AWS CodePipeline
* AWS CodeBuild
* Amazon EC2
* IAM
* GitHub

## Features

* Automated Source Integration
* Continuous Build Process
* Automated Deployment Workflow
* Version Control with GitHub
* Node.js Application Hosting
* End-to-End CI/CD Pipeline

## Project Workflow

1. Developer pushes code changes to GitHub.
2. AWS CodePipeline automatically detects changes.
3. AWS CodeBuild starts the build process.
4. Build artifacts are generated.
5. Application is deployed to Amazon EC2.
6. Updated application becomes available to users.

### Frontend

* HTML
* CSS
* JavaScript

### Backend

* Node.js

### Deployment

* AWS CodePipeline
* AWS CodeBuild
* Amazon EC2

## Deployment Steps

1. Launch Amazon EC2 Instance
2. Install Node.js and PM2
3. Create Node.js Application
4. Push Source Code to GitHub
5. Create AWS CodeBuild Project
6. Create AWS CodePipeline
7. Configure Build Stage
8. Configure Deploy Stage
9. Trigger Pipeline with GitHub Push
10. Verify Application Deployment

## Benefits

* Faster Releases
* Reduced Manual Effort
* Consistent Deployments
* Improved Reliability
* Automated Software Delivery
