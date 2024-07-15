import { Router } from 'express';

const router = Router();

router.get('/users', (req, res) => {
    res.send('Users route')
})

export default router;