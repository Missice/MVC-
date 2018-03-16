<html>
<head>
    <meta charset="utf-8">

    <title>iOS程序设计</title>
    <style>
        * { font-weight: normal; font-family: arial; box-sizing: border-box; }
        body { margin: 20px; }
        ul { margin-top: 0; padding: 0; }
        .account { padding: 15px; border: 1px solid #ccc; border-radius: 5px; margin: 15px 0; background: #FCFCFC; }
        .account h2 { margin-top: 0; padding-bottom: 15px; border-bottom: 1px solid #ddd; }
        .account h3 { font-size: 16px; margin-bottom: 5px; }
    </style>
</head>
<body>
欢迎进入iOS程序设计 ,卢建晖 {{str}}
<#list account as AccountEntity>
    <div class="AccountEntity">
        <h2>${AccountEntity.account}</h2>
        <p>${AccountEntity.psw}</p>
    </div>
</#list>
</body>
</html>
