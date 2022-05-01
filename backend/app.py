from flask import Flask
from flasgger import Swagger
from company.routes import company_bp
from stocks.routes import stock_bp

application = Flask(__name__)

application.config['SWAGGER'] = {
    'title': 'E-Stock-Market API Documentation',
}
swagger = Swagger(application)

# For Development ; uncomment below line and comment production lines
# application.config.from_object("config.DevelopmentConfig")

# For Production.
application.config.from_object("config.ProductionConfig")

application.register_blueprint(company_bp)
application.register_blueprint(stock_bp)

if __name__ == "__main__":
    application.run(host='0.0.0.0')
