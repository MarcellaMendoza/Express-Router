# Lesson plan
  
Put this into 'index.js':
```
app.use(express.static("public"));


const doors = require('./routes.js')
app.use("/doors", doors)
```

Put this into 'routes.js':
```
module.exports = router
```