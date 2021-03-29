import {Router, Request, Response} from 'express';

const routerAuth = Router();

routerAuth.get('/authentication',
    function(request: Request, response: Response) {
      return response.json({'url': '/authentication'});
    },
);

export {routerAuth};
