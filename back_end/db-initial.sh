#########################################################################
# File Name: db-initial.sh
# Author: Afar
# mail: 550047450@qq.com
# Created Time: Monday, October 03, 2016 PM02:42:25 CST
#########################################################################
#!/bin/bash

# connect to mysql as root user of mysql and execute sql script
docker exec -i recrutingsystemeasydemo_mysql_1 mysql -u mahong -pmahong < database/data_initial.sql
