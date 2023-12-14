export const userColumns = [
    {field:"id", headerName:"ID", width:70},
    {field:"user", width:230, headerName:"User", renderCell:(params)=>{
        return(
            <div className="cellWithimg">
                <img className="cellImg" src={params.row.img} alt="avatar" />
                {params.row.username}
            </div>
        )
    }},
    {field:'email', headerName:"Email",width:230},
    {field:'age', headerName:"Age", width:230},
    {field:'status', headerName:"Status", width:230, renderCell:(params)=>{
        return(<div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>);
    }},
]

export const userRows = [
    {
        id:1,
        username: "Snow",
        img: "https://tse1.mm.bing.net/th?id=OIP.WvSE35Sq4Sj4jL0tc-EW9wHaHa&pid=Api&P=0&h=180",
        status:"active",
        email:"afreedi@gmail.com",
        age:21
    },
    {
        id:2,
        username: "Tuttu",
        img: "https://tse1.mm.bing.net/th?id=OIP.WvSE35Sq4Sj4jL0tc-EW9wHaHa&pid=Api&P=0&h=180",
        status:"passive",
        email:"afreedi@gmail.com",
        age:90
    },
    {
        id:3,
        username: "Tuttu",
        img: "https://tse1.mm.bing.net/th?id=OIP.WvSE35Sq4Sj4jL0tc-EW9wHaHa&pid=Api&P=0&h=180",
        status:"passive",
        email:"afreedi@gmail.com",
        age:90
    },
    {
        id:4,
        username: "Tuttu",
        img: "https://tse1.mm.bing.net/th?id=OIP.WvSE35Sq4Sj4jL0tc-EW9wHaHa&pid=Api&P=0&h=180",
        status:"passive",
        email:"afreedi@gmail.com",
        age:90
    },
    {
        id:5,
        username: "Tuttu",
        img: "https://tse1.mm.bing.net/th?id=OIP.WvSE35Sq4Sj4jL0tc-EW9wHaHa&pid=Api&P=0&h=180",
        status:"passive",
        email:"afreedi@gmail.com",
        age:90
    },
    {
        id:6,
        username: "Tuttu",
        img: "https://tse1.mm.bing.net/th?id=OIP.WvSE35Sq4Sj4jL0tc-EW9wHaHa&pid=Api&P=0&h=180",
        status:"passive",
        email:"afreedi@gmail.com",
        age:90
    },
    {
        id:7,
        username: "Liya",
        img: "https://tse1.mm.bing.net/th?id=OIP.WvSE35Sq4Sj4jL0tc-EW9wHaHa&pid=Api&P=0&h=180",
        status:"pending",
        email:"afreedi@gmail.com",
        age:22
    },
    {
        id:8,
        username: "Liya",
        img: "https://tse1.mm.bing.net/th?id=OIP.WvSE35Sq4Sj4jL0tc-EW9wHaHa&pid=Api&P=0&h=180",
        status:"pending",
        email:"afreedi@gmail.com",
        age:22
    },
    {
        id:9,
        username: "Liya",
        img: "https://tse1.mm.bing.net/th?id=OIP.WvSE35Sq4Sj4jL0tc-EW9wHaHa&pid=Api&P=0&h=180",
        status:"pending",
        email:"afreedi@gmail.com",
        age:22
    },
    {
        id:10,
        username: "Liya",
        img: "https://tse1.mm.bing.net/th?id=OIP.WvSE35Sq4Sj4jL0tc-EW9wHaHa&pid=Api&P=0&h=180",
        status:"pending",
        email:"afreedi@gmail.com",
        age:22
    },
    {
        id:11,
        username: "Liya",
        img: "https://tse1.mm.bing.net/th?id=OIP.WvSE35Sq4Sj4jL0tc-EW9wHaHa&pid=Api&P=0&h=180",
        status:"pending",
        email:"afreedi@gmail.com",
        age:22
    },
    {
        id:12,
        username: "Liya",
        img: "https://tse1.mm.bing.net/th?id=OIP.WvSE35Sq4Sj4jL0tc-EW9wHaHa&pid=Api&P=0&h=180",
        status:"pending",
        email:"afreedi@gmail.com",
        age:22
    },
    {
        id:13,
        username: "Liya",
        img: "https://tse1.mm.bing.net/th?id=OIP.WvSE35Sq4Sj4jL0tc-EW9wHaHa&pid=Api&P=0&h=180",
        status:"pending",
        email:"afreedi@gmail.com",
        age:22
    },
    {
        id:14,
        username: "Liya",
        img: "https://tse1.mm.bing.net/th?id=OIP.WvSE35Sq4Sj4jL0tc-EW9wHaHa&pid=Api&P=0&h=180",
        status:"pending",
        email:"afreedi@gmail.com",
        age:22
    },
    {
        id:15,
        username: "Liya",
        img: "https://tse1.mm.bing.net/th?id=OIP.WvSE35Sq4Sj4jL0tc-EW9wHaHa&pid=Api&P=0&h=180",
        status:"pending",
        email:"afreedi@gmail.com",
        age:22
    },
    {
        id:16,
        username: "Liya",
        img: "https://tse1.mm.bing.net/th?id=OIP.WvSE35Sq4Sj4jL0tc-EW9wHaHa&pid=Api&P=0&h=180",
        status:"pending",
        email:"afreedi@gmail.com",
        age:22
    },
    {
        id:17,
        username: "Liya",
        img: "https://tse1.mm.bing.net/th?id=OIP.WvSE35Sq4Sj4jL0tc-EW9wHaHa&pid=Api&P=0&h=180",
        status:"pending",
        email:"afreedi@gmail.com",
        age:22
    },
    {
        id:18,
        username: "Liya",
        img: "https://tse1.mm.bing.net/th?id=OIP.WvSE35Sq4Sj4jL0tc-EW9wHaHa&pid=Api&P=0&h=180",
        status:"pending",
        email:"afreedi@gmail.com",
        age:22
    },
    {
        id:19,
        username: "Liya",
        img: "https://tse1.mm.bing.net/th?id=OIP.WvSE35Sq4Sj4jL0tc-EW9wHaHa&pid=Api&P=0&h=180",
        status:"pending",
        email:"afreedi@gmail.com",
        age:22
    },
    {
        id:20,
        username: "Liya",
        img: "https://tse1.mm.bing.net/th?id=OIP.WvSE35Sq4Sj4jL0tc-EW9wHaHa&pid=Api&P=0&h=180",
        status:"pending",
        email:"afreedi@gmail.com",
        age:22
    },
]


export const columns = [
    { field: 'id', headerName: 'ID', width: 230 },
    { field: 'firstName', headerName: 'First name', width: 230 },
    { field: 'lastName', headerName: 'Last name', width: 230 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 230,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 230,
      renderCell:(params)=>{
        return(<>
            <span>{params.row.firstName + ' ' + params.row.lastName}</span>
        </>)
      }
    },
  ];
  export const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
      ];