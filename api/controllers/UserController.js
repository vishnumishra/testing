/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	login:function(req,res,next){
		user = req.body;
		if(user.name == "test" && user.password == 'test')
		res.redirect('/mypage')
		else{
			res.json(501,{sucess:false})
		}
		// res.json({sucess:true,})
	}
};

