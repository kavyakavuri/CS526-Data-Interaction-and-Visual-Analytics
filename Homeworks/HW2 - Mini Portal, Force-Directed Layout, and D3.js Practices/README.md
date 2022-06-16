## Mini Portal Screenshot
![Mini Portal Screenshot](https://github.com/kavyakavuri/CS526-Data-Interaction-and-Visual-Analytics/blob/b83a72048a9b50f927a7e60827d0034310b3f6e6/Homeworks/HW2%20-%20Mini%20Portal,%20Force-Directed%20Layout,%20and%20D3.js%20Practices/task1/HW2_kk1069_miniPortal.PNG)

Created Basic CentOS 7 x64 droplet on https://www.digitalocean.com/

### General Issues and fixes:

:arrow_right: GPG Key expired error while installing Mysql<br>
:sparkles: Solution:<br>
Run this:
```$rpm --import https://repo.mysql.com/RPM-GPG-KEY-mysql-2022```

And install again

:arrow_right: The SSL error<br>
:sparkles: Solution:<br>
Go to ```template2/Target/src/main/Java/inside/AddTask.java``` and change this line:
```
Connection connection = DriverManager.getConnection("jdbc:mysql://" + 
							"localhost:3306/list" , "boss", "AAAAAbbbbb888;8");
```
to this line:
```
Connection connection = DriverManager.getConnection("jdbc:mysql://" + 
							"localhost:3306/list?useSSL=false" , "boss", "AAAAAbbbbb888;8");
```
Similarly, go to ```template2/src/main/webapp/display.jsp``` and change this line:
```
Connection connection = DriverManager.getConnection("jdbc:mysql://" + 
								"localhost:3306/list" , "boss", "AAAAAbbbbb888;8");
```
to this line:
```
Connection connection = DriverManager.getConnection("jdbc:mysql://" + 
								"localhost:3306/list?useSSL=false" , "boss", "AAAAAbbbbb888;8");
```
---
## Force Directed 3D-Graph using d3.js
![Force Directed Layout](https://github.com/kavyakavuri/CS526-Data-Interaction-and-Visual-Analytics/blob/b83a72048a9b50f927a7e60827d0034310b3f6e6/Homeworks/HW2%20-%20Mini%20Portal,%20Force-Directed%20Layout,%20and%20D3.js%20Practices/task2/HW2_kk1069_layout.png)

---
## HW1 Using D3 JS
### ScatterPlot
![Scatter plot using d3.js](https://github.com/kavyakavuri/CS526-Data-Interaction-and-Visual-Analytics/blob/b83a72048a9b50f927a7e60827d0034310b3f6e6/Homeworks/HW2%20-%20Mini%20Portal,%20Force-Directed%20Layout,%20and%20D3.js%20Practices/task3/HW2_kk1069_scatter.png)

### Ternary Plot
![Ternary Plot using d3.js](https://github.com/kavyakavuri/CS526-Data-Interaction-and-Visual-Analytics/blob/b83a72048a9b50f927a7e60827d0034310b3f6e6/Homeworks/HW2%20-%20Mini%20Portal,%20Force-Directed%20Layout,%20and%20D3.js%20Practices/task3/HW2_kk1069_ternary.png)

### TreeMap 
![TreeMap using d3.js](https://github.com/kavyakavuri/CS526-Data-Interaction-and-Visual-Analytics/blob/b83a72048a9b50f927a7e60827d0034310b3f6e6/Homeworks/HW2%20-%20Mini%20Portal,%20Force-Directed%20Layout,%20and%20D3.js%20Practices/task3/HW2_kk1069_treemap.png)
