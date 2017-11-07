import {Router, Request, Response, NextFunction} from 'express';

let myHeroes = require('../data');
export class MyRouter {

    public router:Router 

    /**
     * constructor
     */
    constructor(){
        this.router = Router();
        this.init();
    }


    /**
   * GET all Heroes.
   */
  public getAll(req: Request, res: Response, next: NextFunction) {
    res.send(myHeroes);
  }
    /**
     * init
     */
    init(){
        this.router.get('/',this.getAll);
        this.router.get('/:id',this.updateOne);
    }
    
    /**
     * update hero 
     */
    public updateOne(req: Request, res: Response, next: NextFunction){
       let query = parseInt(req.params.id);
       let hero = myHeroes.find(hero => hero.id === query);

       if(hero){

            res.send({
                hero 
            });
        }
    }



}
// Create the myHeroRouter, and export its configured Express.Router
const myHeroRoutes = new MyRouter();
myHeroRoutes.init();

export default myHeroRoutes.router;