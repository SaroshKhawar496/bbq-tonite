const requiresAuth = async (req, res, next) => {

    const authHeader = req.get('Authorization')
  
    if (authHeader) {
  
      // Authorization: Bearer eyHJ.....
  
      const [prefix, token] = authHeader.split(' ')
  
      if (prefix === 'Bearer') {
  
        const decoded = verifyToken(token)
  
        if (decoded) {
  
          const { user: { id } } = decoded
  
          try {
  
            const user = await UserModel.findById(id)
  
            req.user = user.serialize()
  
            return next()
  
          } catch (err) {
  
            return next(err)
  
          }
  
        }
  
      }
  
    }
  
    res.status(401).send()
  
  }