# This dockerfile is used to run cypress
FROM cypress/included:10.3.1	
COPY cypress /cypress
RUN npm install --prefix /cypress  cypress-failed-log
RUN npm install --prefix /cypress  @cypress/skip-test

