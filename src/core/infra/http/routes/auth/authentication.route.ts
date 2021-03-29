import {Router, Request, Response} from 'express';

const router = Router();

router.get('/authentication',
    function(request: Request, response: Response) {
      return response.json({'url': '/authentication'});
    },
);
