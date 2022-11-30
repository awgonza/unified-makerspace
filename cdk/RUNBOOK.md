# Purpose

The purpose of this document is to outline cost optimization and monitoring.

## Monitoring 

### Alarms

**FIXME**
There is a billing alarm set up to monitor all accounts each month.  Our team has set up a canary to make sure the website is up and running. 

## Cost Optimization

### Quicksight

Quicksight will be the biggest cost for this project.  Quicksight is a dashboard that compiles the information from the DynamoDB tables and presents it in a readable format.  This is the main product.  This saves the Makerspace money by saving them the time it takes to compile the data.  However, **each account costs them $15/month.** The Makerspace should have one account so they can access the dashboard.  This will allow them to quickly print and give this information to their shareholders.  There should only be one/two more accounts for making changes.  If no changes are needed, one account will do.  This makes sure the cost does not exceed necessary costs. 

### DynamoDB

DynamoDB has the potential to be expensive, but can be managed down to almost nothing.  For DynamoDB, there are two options when you create a table: provisioned and on demand.  By default, tables are created using provisioned mode. Our team realized that the Makerspace does not use reads/writes enough to warrant provisioned reads/writes.  We changed the tables to run on demand and reduced costs about 99%.  **If your team plans on adding DynamoDB tables, we suggest to charge on demand.**

