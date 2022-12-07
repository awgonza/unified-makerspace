# Purpose

The purpose of this document is to outline cost optimization and monitoring.

## Cost Optimization/Monitoring

### Overall Costs

There is an alarm to track overall expenditure for the month.  It should go off when costs for the current month are more than 100 dollars. Currently this is set up to notify these emails:

CONFIRMED:   dranwal@g.clemson.edu, tnidiga@g.clemson.edu

UNCONFIRMED: makerspace@clemson.edu, todds@clemson.edu

### Quicksight

Quicksight will be the biggest cost for this project.  Quicksight is a dashboard that compiles the information from the DynamoDB tables and presents it in a readable format.  This is the main product.  This saves the Makerspace money by saving them the time it takes to compile the data.  However, **each account costs them $15/month.** The Makerspace should have one account so they can access the dashboard.  This will allow them to quickly print and give this information to their shareholders.  There should only be one/two more accounts for making changes.  If no changes are needed, one account will do.  This makes sure the cost does not exceed necessary costs. 

There is an alarm to track this metric.  It should go off when Quicksight costs for the current month are more than 50 dollars (4 accounts). Currently this is set up to notify these emails:

CONFIRMED:   dranwal@g.clemson.edu, tnidiga@g.clemson.edu

UNCONFIRMED: makerspace@clemson.edu, todds@clemson.edu

### DynamoDB

DynamoDB has the potential to be expensive, but can be managed down to almost nothing.  For DynamoDB, there are two options when you create a table: provisioned and on demand.  By default, tables are created using provisioned mode. Our team realized that the Makerspace does not use reads/writes enough to warrant provisioned reads/writes.  We changed the tables to run on demand and reduced costs about 99%.  **If your team plans on adding DynamoDB tables, we suggest to charge on demand.**


