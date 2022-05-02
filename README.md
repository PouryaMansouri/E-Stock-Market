
# E Stock Market IIHT Case Study

E-StockMarket Application is a Restful Microservice application, where it allows users to manage the stocks like create, view stock price details and company details


### Architecture Diagram
![img.png](architecture.png)

### Tech Stack

**FrontEnd:** `React`

**Backend:** `Python` `Flask`

**Cloud Services:** `AWS` `CloudFormation` `IAM` `EC2`

**Database:** `AWS DynamoDB`

**Others:** `Docker` `Nginx` `Docker-Compose`


### To Do

- [x]  Create the Backend Endpoints
- [x]  Test the Backend Endpoints using Postman & Swagger UI
- [ ]  Create the FrontEnd using React
- [x]  Dockerize the application
- [x]  Run the Dockerize application and the Test it
- [x]  Create the AWS DynamoDB using Cloudformation
- [x]  Deploy and Run the application on AWS EC2 
- [ ]  Try to optimize few of the operations like scan()
- [ ]  Store and Process the Logs via the ELK.
- [x]  Run Application using Nginx
- [ ]  Write the Tests Cases using Pytest

### API Reference
`Access the Swagger UI to test all Endpoints: http://localhost:5000/apidocs/index.html`

#### POST  register the company

```http
  POST /api/v1.0/market/company/register
```

| Parameter | Type     | Description                    |
| :-------- | :------- | :----------------------------- |
| `C_CODE` | `string` | **Required**. Company Code |
| `C_NAME` | `string` | **Required**. Company Name |
| `C_TURNOVER` | `number` | **Required**. Company Turnover must be > 10 crore |
| `C_WEBSITE` | `string` | **Required**. Company Website |
| `C_CEO` | `string` | **Required**. Company CEO name |
| `C_EXCHANGE` | `string` | **Required**. Company Exchange ex: NSE/BSE |


#### POST  Add the company stock price

```http
  POST /api/v1.0/market/stock/add/<companycode>
```

| Parameter    | Type               | Description                                       |
|:-------------|:-------------------|:--------------------------------------------------|
| `C_CODE`     | `string - in Path` | **Required**. Company Code                        |
| `S_NAME`     | `string - in Body` | **Required**. Stock Price                         |


#### GET  the company stock price based on timeframe

```http
  GET /api/v1.0/market/stock/get/<companycode>/<startdate>/<enddate>
```


| Parameter     | Type               | Description                                       |
|:--------------|:-------------------|:--------------------------------------------------|
| `companycode` | `string - in Path` | **Required**. Company Code                        |
| `startdate`   | `string - in Path` | **Required**. Stock Price                         |
| `enddate`     | `string - in Path` | **Required**. Stock Price                         |


#### GET  the company data along with latest stock price

```http
  GET /api/v1.0/market/company/info/<companycode>
```


| Parameter     | Type               | Description                                       |
|:--------------|:-------------------|:--------------------------------------------------|
| `companycode` | `string - in Path` | **Required**. Company Code                        |


#### GET  All the company latest stock price

```http
  GET /api/v1.0/market/company/getall
```

#### DELETE  the company data along with stock prices

```http
  DELETE /api/v1.0/market/company/delete/<companycode>
```


| Parameter     | Type               | Description                                       |
|:--------------|:-------------------|:--------------------------------------------------|
| `companycode` | `string - in Path` | **Required**. Company Code                        |


## Run Locally on Linux OS

Clone the project

```bash
  git clone git@github.com:Sumanshu-Nankana/E-Stock-Market.git
```

Go to the project directory and Setup few things

```bash
  cd E-Stock-Market
  update AWS_SECRET_KEY_ID` & `AWS_SECRET_ACCESS_KEY` in backend/settings.py
  with that IAM user - who has AWS Administrator access. (Or atleast Cloudformation, DynamoDB and S3)
```

```commandline
- Open AWS
- Go to CloudFormation
- Create the Stack - using template : infrastructure/stack.yaml
```
Start the application using Docker-Compose

```bash
    docker-compose up
```

Browse the Swagger UI and explore any Endpoints

```bash
  http://localhost:5000/apidocs/index.html
```


## AWS Cloud Deployment

Follow the below steps - to deploy/run this project on AWS EC2

```bash
  1) Login to AWS account
  2) Go to Cloudformation and Create the stack using template 'infrastructure/stack.yml'
     This will Create the EC2, Security Group, Dynamo DB Tables
  3) Logon to EC2 from Command Prompt as 'ssh -i ubuntu@<ec2-public-ip>'
  4) Run 'sudo apt-get update -y'
  5) Run 'sudo apt-get install docker-compose'
  6) Run 'git clone https://github.com/Sumanshu-Nankana/E-Stock-Market.git'
  7) Run 'cd E-Stock-Market'
  8) Run 'nano docker-compose.yml'
     and update the 'SERVER_NAME=0.0.0.0'  with 'SERVER_NAME=<EC2-Public-IP>'
  9) Run 'nano backend/settings.py'
      and update the 'AWS KEY_ID' and 'ACCESS_KEY'
  10) Run 'sudo docker-compose up'
  11) Access the Swagger UI from browser as 'http://<EC2-Public-Ip>/apidocs'
```



## Additional Notes

I am using "gunicorn" wsgi server, which not runs on windows. 
So to run on windows, you need to update the Dockerfile with and remove 'gunicorn' from requirements.txt
```
CMD ["python", "wsgi.py"]
```
