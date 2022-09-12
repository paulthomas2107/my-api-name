import { Response, Router, Request } from 'express';
import Todo from './todos.model';

const router = Router();

router.get<{}, Todo[]>('/', (req: Request, res: Response<Todo[]>) => {
  res.json([
    {
      content: 'Learn TypeScript',
      done: false,
    },
  ]);
});

export default router;
