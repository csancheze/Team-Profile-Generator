const generateHtml = (cards) => 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team Profile</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="./dist/index.css" />
</head>
<body>
    <header>
        <h1>Meet our Team</h1>
    </header>
    <main>
       <!--Here goes the team-->
       ${cards}
    
      </div>
    </main>
    
</body>
</html>`


module.exports = generateHtml