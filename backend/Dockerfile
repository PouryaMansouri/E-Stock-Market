FROM python:3.8-alpine

LABEL version="1.0" \
      Author="sumanshunankana@gmail.com" \
      description="E-Stock-Market Case Study by IIHT"

WORKDIR /e-stock-market

COPY . /e-stock-market

RUN pip install -r requirements.txt

# For Development Server, uncomment below lines and comment Production Server lines
CMD ["python", "app.py"]

# For Production Server
# CMD ["/usr/local/bin/uwsgi, "--ini", uwsgi.ini"]

# commands to create an image and run the container
# docker build -t e-stock-market .
# docker images
# docker run -d -p 5000:5000 e-stock-market
# docker exec -it <container-id> /bin/sh