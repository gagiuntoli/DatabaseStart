# Database management tutorial

This is a very stupid and simple tutorial on how to connect to database server, create a database and operate with the data from Javascript.

# Basic steps

## Set a local environment in you machine and work there

1) *Install database server*

In my case I chose `MariaDB` since it is quiet simple and standard.

```bash
sudo pacman -S mariadb
```

Initialize data directories:
```bash
sudo mysql_install_db --user=mysql --basedir=/usr --datadir=/var/lib/mysql
```

Launch the daemon:
```bash
sudo systemctl start mysqld
```
The server should be running, check with `htop` that the process is there.

2) *Configure database server*

Create a user and set a password for it. All this operations are done with `sudo`. Open the local `MariaDB` terminal with:

```bash
sudo mysql
```

And create the user using the MariaDB's local terminal:

```bash
CREATE USER '<username>'@'localhost' IDENTIFIED BY '<password>';
GRANT ALL PRIVILEGES ON *.* TO '<username>'@'localhost' WITH GRANT OPTION;
FLUSH PRIVILEGES;
```

Check that the user was added:

```bash
SELECT User FROM mysql.user;
```

3) *Start a communication Node.js with MariaDB*

First install the packages for this:

```bash
npm install
```

Set the username and password in `config/config.js` and tell Git to not track does changes:

```bash
git update-index --assume-unchanged src/config/config.js
```
