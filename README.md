
# E Stock Market IIHT Case Study

E-StockMarket Application is a Restful Microservice application, where it allows users to manage the stocks like create, view stock price details and company details


### Tech Stack

**FrontEnd:** `React`

**Backend:** `Python` `Flask`

**Cloud and Tools:** `AWS` `CloudFormation` `IAM`

**Database:** `AWS DynamoDB`


### To Do

- [x]  Create the Backend Endpoints
- [x]  Test the Backend Endpoints using Postman & Swagger UI
- [ ]  Create the FrontEnd using React
- [x]  Dockerize the application
- [x]  Run the Dockerize application and the Test it
- [x]  Create the AWS DynamoDB using Cloudformation
- [ ]  Deploy the application on AWS Cloud 
- [ ]  Try to optimize few of the operations like scan()
- [ ]  Store the Logs in the Logstash
- [ ]  Run Application using Nginx & uWSGI Server
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


## Run Locally

Clone the project

```bash
  git clone git@github.com:Sumanshu-Nankana/E-Stock-Market.git
```

Go to the project directory and Setup few things

```bash
  cd E-Stock-Market
  cd backend
  update AWS_SECRET_KEY_ID` & `AWS_SECRET_ACCESS_KEY` in settings.py
  with that IAM user - who has AWS Administrator access. (Or atleast Cloudformation, DynamoDB and S3)
```

```commandline
- Open AWS
- Go to CloudFormation
- Create the Stack - using template : infrastructure/stack.yaml
```
Start the application using Docker

```bash
  docker build -t e-stock-market .
  docker run -d -p 5000:5000 e-stock-market
```

Browse the Swagger UI and explore any Endpoints

```bash
  http://localhost:5000/apidocs/index.html
```

