const techContent = [
  {
    technology: "Postgres",
    docsLink: "https://www.postgresql.org/docs/",
    intro:
      "PostgreSQL is a powerful, open-source object-relational database management system (ORDBMS), that uses and extends the SQL language, combined with many features that safely store and scale the most complicated data workloads. <br/> <br/> The origins of PostgreSQL date back to 1986, when it was developed as part of the POSTGRES project at the University of California at Berkeley Computer Science Department. It has more than 30 years of active development on the core platform. ",
    content: [
      {
        name: "",
        intro:
          "PostgreSQL has earned a strong reputation for its proven architecture, reliability, data integrity, robust feature set, extensibility and the dedication of the open-source community behind the software to consistently deliver performant and innovative solutions. <br/><br/> PostgreSQL runs on all major operating systems, has been ACID-compliant since 2001 and has powerful add-ons, such as the popular PostGIS geospatial database extender. It has become the open-source relational database of choice for many people and organisations. <br/> The latest version of PostgreSQL is 13.4, released on 12 August 2021. ",
        data: [],
      },
      {
        name: "Why use PostgreSQL? ",
        intro:
          "PostgreSQL comes with many features aimed to help developers build applications, administrators to protect data integrity and build fault-tolerant environments and help manage data no matter how big or small the dataset. <br/><br/>In addition to being free and open-source, PostgreSQL is highly extensible. It is possible to define data types, build out custom functions, even write code from different programming languages without recompiling a database.  <br/><br/>PostgreSQL tries to conform with the SQL standard where such conformance does not contradict traditional features or could lead to poor architectural decisions. Many of the features required by the SQL standard are supported, though sometimes with slightly differing syntax or function. Further moves towards conformance can be expected over time. ",
        data: [],
      },
      {
        name: "Features",
        intro:
          "Below is an inexhaustive list of various features found in PostgreSQL, with more being added in every major release: ",
        data: [
          {
            name: "Data Types",
            description:
              "<ul><li>Primitives: Integer, Numeric, String, Boolean </li><li>Structured: Date/Time, Array, Range, UUID </li><li>Document: JSON/JSONB, XML, Key-value (Hstore) </li><li>Geometry: Point, Line, Circle, Polygon </li><li>Customizations: Composite, Custom Types </li></ul>",
          },
          {
            name: "Data Integrity",
            description:
              "<ul><li>UNIQUE, NOT NULL </li><li>Primary Keys </li><li>Foreign Keys </li><li>Exclusion Constraints </li><li>Explicit Locks, Advisory Locks </li></ul>",
          },
          {
            name: "Concurrency, Performance",
            description:
              "<ul><li>Indexing: B-tree, Multicolumn, Expressions, Partial </li><li>Advanced Indexing: GiST, SP-Gist, KNN Gist, GIN, BRIN, Covering indexes, Bloom filters </li><li>Sophisticated query planner / optimizer, index-only scans, multicolumn statistics </li><li>Transactions, Nested Transactions (via savepoints) </li><li>Multi-Version concurrency Control (MVCC) </li><li>Parallelization of read queries and building B-tree indexes </li><li>Table partitioning </li><li>All transaction isolation levels defined in the SQL standard, including Serializable </li><li>Just-in-time (JIT) compilation of expressions </li></ul>",
          },
          {
            name: "Reliability, Disaster Recovery",
            description:
              "<ul><li>Write-ahead Logging (WAL) </li><li>Replication: Asynchronous, Synchronous, Logical</li> <li>Point-in-time-recovery (PITR), active standbys </li><li>Tablespaces </li></ul>",
          },
          {
            name: "Security",
            description:
              "<ul><li>Authentication: GSSAPI, SSPI, LDAP, SCRAM-SHA-256, Certificate, and more </li><li>Robust access-control system </li><li>Column and row-level security </li><li>Multi-factor authentication with certificates and an additional method </li></ul>",
          },
          {
            name: "Extensibility",
            description:
              "<ul><li>Stored functions and procedures </li><li>Procedural Languages: PL/PGSQL, Perl, Python (and many more) </li><li>SQL/JSON path expressions </li><li>Foreign data wrappers: connect to other databases or streams with a standard SQL interface </li><li>Customizable storage interface for tables </li><li>Many extensions that provide additional functionality, including PostGIS </li></ul>",
          },
          {
            name: "Internationalisation, Text Search ",
            description:
              "<ul><li>Support for international character sets, e.g., through ICU collations </li><li>Case-insensitive and accent-insensitive collations </li><li>Full-text search </li></ul>",
          },
        ],
      },
      {
        name: "",
        intro:
          "There are many more features that can be found in the PostgreSQL documentation.  <br/><br/>PostgreSQL has also been proven to be highly scalable in both, the sheer quantity of data it can manage and the number of concurrent users it can accommodate. There are active PostgreSQL clusters in production environments that manage many terabytes of data, and specialized systems that manage petabytes. ",
        data: [],
      },
    ],
    examples: [],
    reference: ["https://www.postgresql.org/about/"],
  },
  {
    technology: "Neo4J",
    docsLink: "https://neo4j.com/docs/",
    intro: "Content coming soon.",
    content: [],
    examples: [],
    reference: [],
  },
  {
    technology: "MongoDB",
    docsLink: "https://docs.mongodb.com/",
    intro:
      "MongoDB is an open-source document-based database built on a horizontal scale-out architecture. Founded in 2007, MongoDB has a large and thriving community of developers across the open-source community, academia, among system integrators and consulting firms across the globe. ",
    content: [
      {
        name: "",
        intro:
          "Instead of storing data in tables, like SQL databases, each row in a MongoDB database is a document described in JSON, a formatting language. Not only that data can be stored to look like rows and columns, but documents can be embedded inside each other - a technique that allows complex data objects to be stored and retrieved together. <br/><br/> MongoDB database can be used from a wide variety of programming languages, including C, C# and .NET, C++, Erlang, Haskell, Java, JavaScript, Perl, PHP, Python, Ruby, and Scala (via Casbah). <br/><br/> MongoDB Atlas is the core database at the centre of the MongoDB Cloud. It allows developers to get started right away in any of the public clouds and easily migrate on-premises MongoDB instances to the cloud.  <br/><br/> The latest version of the MongoDB is 4.4, released in September 2020. ",
        data: [],
      },
      {
        name: "Why use Mongo DB?",
        intro:
          "MongoDB was built for people who are developing internet and business applications that need to evolve quickly and handle data of all sorts in a scalable way. <br/><br/>Thousands of companies run their businesses on MongoDB and use it to handle their most demanding applications in areas like IoT, Gaming, Logistics, Banking, e-Commerce and Content Management. <br/><br/>MongoDB is a great choice to:<ul><li> Represent data with natural clusters and variability over time, or in its structure </li><li>Support rapid iterative development </li><li>Enable collaboration of multiple teams </li><li>Scale to high levels of read and write traffic </li><li>Scale data repository to a massive size </li><li>Evolve the type of deployment as the business changes </li><li>Store, manage and search data with text, geospatial or time series dimensions </li></ul>",
        data: [],
      },
      {
        name: "How MongoDB stores data?",
        intro:
          "MongoDB is NoSQL database, developed because RDBMS systems based on SQL did not support the scale or rapid development cycles needed for creating modern applications. NoSQL includes document-oriented databases like MongoDB, columnar databases, in-memory databases and more. <br/></br/>The “documents” in MongoDB are JSON and BSON files.<br/></br/>JSON is powerful for many reasons: <ul><li> It is a natural form to store data </li><li>It is human readable </li><li>Structured and unstructured information can be stored in the same document </li><li>It is possible to nest JSON to store complex data objects </li><li>JSON has a flexible and dynamic schema, so adding fields or leaving a field out is not a problem </li></ul>The structure of the information is under the control of the developer. Developers adjust and reformat the database as the application evolves, without the help of a database administrator. When needed, MongoDB can coordinate and control changes to the structure of documents using schema validation. <br/><br/>Binary JSON format (BSON), was created to increase efficiency and support more data types. Data stored in BSON can be searched and indexed, tremendously increasing performance. <br/><br/>MongoDB supports a wide variety of indexing methods including text, decimal, geospatial and partial. Geospatial tagging was added so that documents can be queried by location. ",
        data: [],
      },
      {
        name: "Scalability and Transactionality",
        intro:
          " MongoDB is built on a scale-out architecture - a structure that distributes work across many smaller computers in order to work together and create systems that are fast and can handle huge amounts of data. <br/><br/>MongoDB engineering innovations support massive numbers of reads and writes. At the heart of these innovations is MongoDB’s approach to sharding, which allows clusters of information to be stored together as the information is spread across the cluster of computers. <br/><br/>MongoDB also supports database transactions that allow multiple database changes to be grouped together and either made or rejected in a batch. This is one of the most important features for support of advanced applications. ",
        data: [],
      },
      {
        name: "Other Features",
        intro:
          "Some of the reasons why MongoDB is the most popular NoSQL database: ",
        data: [
          {
            name: "",
            description:
              "<ul><li>The document data model is a powerful way to store and retrieve data that allows developers to move fast </li><li>MongoDB’s horizontal, scale-out architecture can support huge volumes of both, data and traffic </li><li>It has a great user experience for developers who can install MongoDB and start writing code immediately </li><li>It can be used everywhere by anyone </li><li>MongoDB has developed a large and mature platform ecosystem, which means: <ul><li>It has a worldwide community of developers and consultants, so it is easy to get help </li><li>It works on all types of computing platforms, both on-premise and in the cloud (both, private and public clouds, such as AWS, Azure, and Google Cloud) </li><li>It can be used from all major languages </li><li>It can be accessed from all major ETL and data management systems </li><li>It has enterprise-grade support </li></ul></li></ul>MongoDB has always focused on providing developers an excellent user experience which, in addition to all its other properties, has made MongoDB a favourite of developers worldwide for a huge variety of applications. ",
          },
        ],
      },
    ],
    examples: [],
    reference: ["https://www.mongodb.com/why-use-mongodb"],
  },
  {
    technology: "MySQL",
    docsLink: "https://dev.mysql.com/doc/",
    intro: `Created in 1995, MySQL is the most popular open-source relational database management system. Its name is a combination of "My", the name of co-founder Michael Widenius's daughter, and "SQL", the abbreviation for Structured Query Language.<br/><br/>A relational database is where data is organised from one table and split into multiple tables whereby each data type within the table is related to another. SQL is a language programmers use to create, modify, and extract data from the relational database, as well as control user access to the database. <br/><br/>Today MySQL has become the leading database choice for web-based applications, used by high profile web properties including Facebook, Twitter, YouTube, Yahoo! and many more. `,
    content: [
      {
        name: "Features",
        intro:
          "At its core, MySQL offers web database management, however the features and capabilities available go beyond this. Below are just some of the key features of MySQL. ",
        data: [
          {
            name: "Security",
            description:
              "MySQL offers authentication for passwords, authorization for privilege management, encryption for sensitive data, firewalls to block database attacks such as SQL injection and frequent audits to maintain compliance. ",
          },
          {
            name: "Scalability",
            description:
              "MySQL supports business to scale up swiftly and meet the demand of users and data through a vertical and hybrid approach. It can handle almost any amount of data, up to as much as 50 million rows or more.",
          },
          {
            name: "Flexible",
            description:
              "MySQL supports many embedded applications, which makes MySQL very flexible.",
          },
          {
            name: "Compatible Across Platforms",
            description:
              "MySQL is compatible to run on many operating systems, like Novell NetWare, Windows* Linux*, many varieties of UNIX* (such as Sun* Solaris*, AIX, and DEC* UNIX), OS/2, FreeBSD*, and others. ",
          },
          {
            name: "High Performance & Productivity ",
            description:
              "MySQL is faster, more reliable, and cheaper because of its unique storage engine architecture. It provides very high-performance results in comparison to other databases without losing an essential functionality of the software. It has fast loading utilities because of the different cache memory.",
          },
          {
            name: "GUI Support",
            description:
              "MySQL Workbench is a visual database graphical user interface tool that integrates SQL development, admin, database design and creation into a single development environment.",
          },
        ],
      },
      {
        name: "Data Types",
        intro:
          "MySQL supports SQL data types in several categories: numeric types, date and time types, string (character and byte) types, spatial types, and the JSON data type. ",
        data: [
          {
            name: "Numeric",
            description:
              "MySQL supports all standard SQL numeric data types. These types include the exact numeric data types (INTEGER, SMALLINT, DECIMAL, and NUMERIC), as well as the approximate numeric data types (FLOAT, REAL, and DOUBLE PRECISION). ",
          },
          {
            name: "Date and Time",
            description:
              "The date and time data types for representing temporal values are DATE, TIME, DATETIME, TIMESTAMP, and YEAR. The TIMESTAMP and DATETIME types have special automatic updating behaviour, which is that they are automatically initialised and updated to the current date and time. You can assign the current timestamp as the default value, the auto-update value, or both. ",
          },
          {
            name: "String",
            description:
              "The string data types are CHAR, VARCHAR, BINARY, VARBINARY, BLOB, TEXT, ENUM and SET. For each of the string types, there are specific storage requirements. For example VARCHAR, VARBINARY, BLOB and TEXT are variable length types which means that the storage required depend on the below: <ul><li>The actual length of the column value and max possible length </li><li>The character set used for the column, as some character sets contain multibyte characters. </li></ul>",
          },
          {
            name: "JSON",
            description:
              "MySQL supports a native JSON data type that enables efficient access to data in JSON (JavaScript Object Notation) documents. The JSON data type provides these advantages over storing JSON-format strings in a string column: <ul><li>Automatic validation of JSON documents stored in JSON columns, invalid documents produce an error. </li><li>Optimized storage format - JSON documents stored in JSON columns are converted to an internal format that permits quick read access to document elements. </li></ul>",
          },
          {
            name: "Spatial",
            description:
              "Spatial data types can be single value geometry values, or a collection of values. <ul><li>Single Value: geometry, point, linestring, polygon</li><li>Collection: geometrycollection, multipoint, multilinestring, multipolygon </li></ul>",
          },
        ],
      },
      {
        name: "Schemas",
        intro:
          "Schema is a collection of tables with rows and columns, and a separate query can be written for the schemas like databases. They define size, type, a grouping of information. The schemas have database objects like views, tables, and privileges, which include data types, functions, and operators. <br/><br/>MySQL inspects with default schemas which are information schema, performance schema, and sys: ",
        data: [
          {
            name: "Information Schemas",
            description:
              "They provide access to metadata, stores information about other databases. The tables here are stored in the memory storage engine. ",
          },
          {
            name: "Performance MySQL Schema",
            description:
              "They acts as a storage engine that operates on a table under a schema database. Performance schema collects exact data in the MySQL database server. The configuration is done by three major roles namely actors, instruments and allows collecting statistical data. ",
          },
          {
            name: "Sys",
            description:
              "An object helps in collecting performance schemas data. We have a MySQL schema design that helps in analysing and tuning query optimization. A proper designing in schema requires entities, relationships, Scalability. ",
          },
        ],
      },
      {
        name: "MySQL Workbench ",
        intro: "MySQL Workbench functionality covers five main topics: ",
        data: [
          {
            name: "SQL Development",
            description:
              "Enables you to create and manage connections to database servers. Along with enabling you to configure connection parameters, MySQL Workbench provides the capability to execute SQL queries on the database connections using the built-in SQL Editor. ",
          },
          {
            name: "Data Modelling (Design)",
            description:
              "Enables you to create models of your database schema graphically, reverse and forward engineer between a schema and a live database, and edit all aspects of your database using the comprehensive Table Editor. The Table Editor provides easy-to-use facilities for editing Tables, Columns, Indexes, Triggers, Partitioning, Options, Inserts and Privileges, Routines and Views. ",
          },
          {
            name: "Server Administration",
            description:
              "Enables you to administer MySQL server instances by administering users, performing backup and recovery, inspecting audit data, viewing database health, and monitoring the MySQL server performance.  ",
          },
          {
            name: "Data Migration",
            description:
              "Allows you to migrate from Microsoft SQL Server, Microsoft Access, Sybase ASE, SQLite, SQL Anywhere, PostgreSQL, and other RDBMS tables, objects and data to MySQL. Migration also supports migrating from earlier versions of MySQL to the latest releases.",
          },
          {
            name: "MySQL Enterprise Support",
            description:
              "Support for Enterprise products such as MySQL Enterprise Backup, MySQL Firewall, and MySQL Audit.",
          },
        ],
      },
      {
        name: "Testing",
        intro:
          "Database testing helps us to find out such vulnerabilities in a database system to protect a database from an unstable state. <br/><br/>MySQL comes with a built-in test framework, which consists of programs that run tests, and directories and files used by those programs. <br/><br/>The MySQL test framework uses several programs: ",
        data: [
          {
            name: "",
            description:
              "<ul><li>The mysql-test-run.pl Perl script is the main application used to run the test suite. It invokes mysqltest to run individual test cases.</li><li>mysqltest runs test cases.</li><li>the mysql_client_test program is used for testing aspects of the MySQL client API that cannot be tested using mysqltest and its test language.</li><li>the mysql-stress-test.pl Perl script performs stress-testing of the MySQL server.</li><li>unit-testing facility is provided so that individual unit test programs can be created for storage engines and plugins.</li></ul> ",
          },
        ],
      },
    ],
    examples: [],
    reference: ["https://dev.mysql.com/doc/"],
  },
  {
    technology: "Oracle",
    docsLink: "https://docs.oracle.com/en/",
    intro:
      "Oracle is the world's first commercially available Relational Database Management System. <br/><br/>In 1977, Larry Ellison, Bob Miner, and Ed Oates started the consultancy Software Development Laboratories, which became Relational Software, Inc. (RSI). In 1983, RSI became Oracle Systems Corporation and then later Oracle Corporation.  ",
    content: [
      {
        name: "What is RDBMS? ",
        intro:
          "An RDBMS moves data into a database, stores the data, and retrieves it so that applications can manipulate it.",
        data: [],
      },
      {
        name: "Basic Concepts of an Oracle RDBMS",
        intro: "",
        data: [],
      },
      {
        name: "How Data is Stored? ",
        intro:
          "Schema objects are user-created structures that directly refer to the data in the database. The database supports many types of schema objects, the most important of which are tables. ",
        data: [],
      },
      {
        name: "Tables ",
        intro:
          "A table is the basic unit of data organization in an Oracle database. <br/><br/> A table describes an entity, which is something of significance about which information must be recorded. For example, an employee could be an entity. <br/><br/> A table definition includes a table name and set of columns. <br/><br/> A column identifies an attribute of the entity described by the table. For example, the column employee_id in the employees table refers to the employee ID attribute of an employee entity. <br/><br/> In general, each column has a name and a data type, which is associated with a specific storage format, constraints, and valid range of values. The data type of a value associates a fixed set of properties with the value. For example, the data type for employee_id is NUMBER(6), indicating that this column can only contain numeric data up to 6 digits in width. The width can be predetermined by the data type, as with DATE. <br/><br/> A row is a collection of column information corresponding to a record in a table. For example, a row in the employees table describes the attributes of a specific employee: employee ID, last name, first name, and so on. After you create a table, you can insert, query, delete, and update rows using SQL or PL/SQL. ",
        data: [],
      },
      {
        name: "How Data is Manipulated?",
        intro:
          "In Oracle Databases, data can be manipulated using SQL or PL/SQL.",
        data: [],
      },
      {
        name: "Structured Query Language (SQL)",
        intro:
          "SQL is a set-based declarative language that provides an interface to an RDBMS such as Oracle Database.<br/><br/> Procedural languages such as C describe how things should be done. SQL is nonprocedural and describes what should be done. <br/><br/> SQL is the ANSI standard language for relational databases. All operations on the data in an Oracle database are performed using SQL statements. For example, you use SQL to create tables and query and modify data in tables. <br/><br/> SQL statements enable you to perform the following tasks: <ul><li>Query data</li><li>Insert, update, and delete rows in a table </li><li>Create, replace, alter, and drop objects </li><li>Control access to the database and its objects </li><li> Guarantee database consistency and integrity </li><li>SQL unifies the preceding tasks in one consistent language. Oracle SQL is an implementation of the ANSI standard. Oracle SQL supports numerous features that extend beyond standard SQL.</li></ul>",
        data: [],
      },
      {
        name: "PL/SQL ",
        intro:
          "PL/SQL is a procedural extension to Oracle SQL. <br/><br/> PL/SQL is integrated with Oracle Database, enabling you to use all of the Oracle Database SQL statements, functions, and data types. You can use PL/SQL to control the flow of a SQL program, use variables, and write error-handling procedures. <br/><br/> A primary benefit of PL/SQL is the ability to store application logic in the database itself. A PL/SQL procedure or function is a schema object that consists of a set of SQL statements and other PL/SQL constructs, grouped together, stored in the database, and run as a unit to solve a specific problem or to perform a set of related tasks. <br/><br/> The principal benefit of server-side programming is that built-in functionality can be deployed anywhere. Oracle Database can also store program units written in Java. A Java stored procedure is a Java method published to SQL and stored in the database for general use. You can call existing PL/SQL programs from Java and Java programs from PL/SQL.",
        data: [],
      },
      {
        name: "Tools",
        intro:
          "In order to run SQL and PL/SQL we have various available tools: <br/><br/>Oracle SQL Developer <ul><li>Pricing: Free </li><li>Vendor: Oracle </li><li>Targets: Development and Testing </li></ul> Toad for Oracle <ul><li>Pricing: License </li><li>Vendor: Quest Software </li><li>Targets: Development and Testing </li></ul>Data Grip <ul><li>Pricing: License </li><li>Vendor: JetBrains </li><li>Targets: Development and Testing </li></ul> utPLSQL <ul><li>Pricing: Free </li><li>Vendor: utPLSQL Project </li><li>Targets: Testing </li></ul>",
        data: [],
      },
    ],
    examples: [],
    reference: [],
  },
  {
    technology: "SQL Server",
    docsLink:
      "https://docs.microsoft.com/en-us/sql/sql-server/?view=sql-server-ver15",
    intro:
      "Microsoft SQL Server is a relational database management system developed by Microsoft. As a database server, it is a software product with the primary function of storing and retrieving data as requested by other software applications—which may run either on the same computer or on another computer across a network (including the Internet). Microsoft markets at least a dozen different editions of Microsoft SQL Server, aimed at different audiences and for workloads ranging from small single-machine applications to large Internet-facing applications with many concurrent users.",
    content: [],
    examples: [],
    reference: [
      "https://www.microsoft.com/en-gb/sql-server/sql-server-2022",
      "https://en.wikipedia.org/wiki/Microsoft_SQL_Server",
    ],
  },
  {
    technology: "BigQuery",
    docsLink: "https://cloud.google.com/bigquery/docs",
    intro:
      "BigQuery is a completely serverless and cost-effective enterprise data warehouse. It has built-in machine learning and BI that works across clouds, and scales with your data.",
    content: [
      {
        name: "Features",
        intro:
          "It is a Platform as a Service (PaaS) that supports querying using ANSI SQL. It also has built-in machine learning capabilities. BigQuery was announced in May 2010 and made generally available in November 2011.",
        data: [
          {
            name: "Built-in machine learning",
            description:
              "BigQuery ML enables data scientists and data analysts to build and operationalize ML models on planet-scale structured, semi-structured, and now unstructured data directly inside BigQuery, using simple SQL",
          },
          {
            name: "Analyze at scale",
            description:
              "BigQuery is incredibly elastic — it scales to any size, quickly and seamlessly. In addition, BigQuery is highly cost efficient — charging you only for the resources consumed, rather than resources deployed or negotiated in a contract",
          },
          {
            name: "Integration and accessibility",
            description:
              "Integration with Google spreadsheets, letting data analysts drive massive datasets in BigQuery directly from a spreadsheets interface • Interactive dashboards easily built with Google AppEngine, and smooth data • HTTP REST API, a web UI for interactive querying, and command-line interface",
          },
          {
            name: "Security and reliability",
            description:
              "Customer-defined ACLs for controlling fine-grained data access • Highly available and durable data, even in extreme failure modes, with data replicated across multiple locations",
          },
        ],
      },
    ],
    examples: [],
    reference: [
      "https://cloud.google.com/files/BigQuery.pdf",
      "https://cloud.google.com/bigquery",
    ],
  },
  {
    technology: "Snowflake",
    docsLink: "https://docs.snowflake.com/en/",
    intro:
      "Snowflake a cloud native data solution,Snowflake is built on top of the Amazon Web Services, Microsoft Azure, and Google cloud infrastructure. There's no hardware or software to select, install, configure, or manage, so it's ideal for organizations that don't want to dedicate resources for setup, maintenance, and support of in-house servers. ",
    content: [
      {
        name: "Architecture",
        intro:
          "Snowflake's architecture allows similar flexibility with big data. Snowflake decouples the storage and compute functions, which means organizations that have high storage demands but less need for CPU cycles, or vice versa, don't have to pay for an integrated bundle that requires them to pay for both. Users can scale up or down as needed and pay for only the resources they use. Storage is billed by terabytes stored per month, and computation is billed on a per-second",

        data: [],
      },
      {
        name: "Database storage",
        intro:
          "The database storage layer holds all data loaded into Snowflake, including structured and semistructured data. Snowflake automatically manages all aspects of how the data is stored: organization, file size, structure, compression, metadata, and statistics. This storage layer runs independently of compute resource",
        data: [],
      },
      {
        name: "Compute layer",
        intro:
          "The compute layer is made up of virtual warehouses that execute data processing tasks required for queries. Each virtual warehouse (or cluster) can access all the data in the storage layer, then work independently, so the warehouses do not share, or compete for, compute resources. This enables nondisruptive, automatic scaling, which means that while queries are running, compute resources can scale without the need to redistribute or rebalance the data in the storage layer.",
        data: [],
      },
    ],
    examples: [],
    reference: [
      "https://www.snowflake.com/en/",
      "https://www.stitchdata.com/resources/snowflake/",
    ],
  },
  {
    technology: "Apache Spark",
    docsLink: "https://spark.apache.org/",
    intro:
      "Apache Spark™ is a multi-language engine for executing data engineering, data science, and machine learning on single-node machines or clusters",
    content: [
      {
        name: "",
        intro:
          "The most widely-used engine for scalable computing platform used by thousands of companies, including 80% of the Fortune 500",

        data: [],
      },
      {
        name: "Batch/streaming data",
        intro:
          "Unify the processing of your data in batches and real-time streaming, using your preferred language: Python, SQL, Scala, Java or R.",
        data: [],
      },
      {
        name: "SQL analytics",
        intro:
          "Execute fast, distributed ANSI SQL queries for dashboarding and ad-hoc reporting. Runs faster than most data warehouses.",
        data: [],
      },
      {
        name: "Data science & Machine learning",
        intro:
          "Train machine learning algorithms on a laptop and use the same code to scale to fault-tolerant clusters of thousands of machines.",
        data: [],
      },
      {
        name: "Ubiquitous",
        intro:
          "Available on all cloud platforms and able to interact with many soorces of data Spark is a powerful framework ",
        data: [],
      },
    ],
    examples: [],
    reference: ["https://spark.apache.org/"],
  },
  {
    technology: "Apache Hadoop",
    docsLink: "https://hadoop.apache.org/",
    intro:
      "The Apache™ Hadoop® project develops open-source software for reliable, scalable, distributed computing. The Apache Hadoop software library is a framework that allows for the distributed processing of large data sets across clusters of computers using simple programming models. It is designed to scale up from single servers to thousands of machines, each offering local computation and storage. Rather than rely on hardware to deliver high-availability, the library itself is designed to detect and handle failures at the application layer, so delivering a highly-available service on top of a cluster of computers, each of which may be prone to failures.",
    content: [
      {
        name: "",
        intro:
          "The most widely-used engine for scalable computing platform used by thousands of companies, including 80% of the Fortune 500",

        data: [],
      },
      {
        name: "Batch/streaming data",
        intro:
          "Unify the processing of your data in batches and real-time streaming, using your preferred language: Python, SQL, Scala, Java or R.",
        data: [],
      },
      {
        name: "SQL analytics",
        intro:
          "Execute fast, distributed ANSI SQL queries for dashboarding and ad-hoc reporting. Runs faster than most data warehouses.",
        data: [],
      },
      {
        name: "Data science & Machine learning",
        intro:
          "Train machine learning algorithms on a laptop and use the same code to scale to fault-tolerant clusters of thousands of machines.",
        data: [],
      },
      {
        name: "Ubiquitous",
        intro:
          "Available on all cloud platforms and able to interact with many soorces of data Spark is a powerful framework ",
        data: [],
      },
    ],
    examples: [],
    reference: ["https://hadoop.apache.org/"],
  },
  {
    technology: "Apache Hive",
    docsLink: "https://hive.apache.org/",
    intro:
      "Apache Hive is a data warehouse software project built on top of Apache Hadoop for providing data query and analysis. Hive gives an SQL-like interface to query data stored in various databases and file systems that integrate with Hadoop",
    content: [
      {
        name: "",
        intro:
          "Different storage types such as plain text, RCFile, HBase, ORC, and others. Metadata storage in a relational database management system, significantly reducing the time to perform semantic checks during query execution. Operating on compressed data stored into the Hadoop ecosystem using algorithms including DEFLATE, BWT, snappy, etc. Built-in user-defined functions (UDFs) to manipulate dates, strings, and other data-mining tools. Hive supports extending the UDF set to handle use-cases not supported by built-in functions. SQL-like queries (HiveQL), which are implicitly converted into MapReduce or Tez, or Spark jobs.",

        data: [],
      },
    ],
    examples: [],
    reference: ["https://hive.apache.org/"],
  },
  {
    technology: "Liquibase",
    docsLink: "https://www.liquibase.org/",
    intro:
      "Liquibase is an open-source database schema change management solution which enables you to manage revisions of your database changes easily.",
    content: [
      {
        name: "",
        intro:
          "Liquibase uses SQL, XML, JSON, and YAML changelog files to list database changes in sequential order. Database changes have the format of changesets. Changesets contain Change Type, which are types of operations to apply to the database, such as adding a column or primary key. Context, label, and precondition changelog tags help precisely control when a database change is made and to which database environment it is deployed.  ",

        data: [],
      },
    ],
    examples: [],
    reference: ["https://www.liquibase.org/"],
  },
  {
    technology: "Apache Hive",
    docsLink: "https://hive.apache.org/",
    intro:
      "Apache Hive is a data warehouse software project built on top of Apache Hadoop for providing data query and analysis. Hive gives an SQL-like interface to query data stored in various databases and file systems that integrate with Hadoop",
    content: [
      {
        name: "",
        intro:
          "Different storage types such as plain text, RCFile, HBase, ORC, and others. Metadata storage in a relational database management system, significantly reducing the time to perform semantic checks during query execution. Operating on compressed data stored into the Hadoop ecosystem using algorithms including DEFLATE, BWT, snappy, etc. Built-in user-defined functions (UDFs) to manipulate dates, strings, and other data-mining tools. Hive supports extending the UDF set to handle use-cases not supported by built-in functions. SQL-like queries (HiveQL), which are implicitly converted into MapReduce or Tez, or Spark jobs.",

        data: [],
      },
    ],
    examples: [],
    reference: ["https://hive.apache.org/"],
  },
];

export default techContent;
