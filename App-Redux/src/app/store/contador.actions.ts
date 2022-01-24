// import { Action } from '@ngrx/store';

// export const INCREMENTAR = '[CONTADOR] - Incrementar';
// export const DECREMENTAR = '[CONTADOR] - Decrementar';

// export class IncrementarAction implements Action{
//   readonly type = INCREMENTAR;
// }
// export class DecrementarAction implements Action{
//   readonly type = DECREMENTAR;
// }


import { createAction } from '@ngrx/store';

export const INCREMENTAR = createAction('[CONTADOR] - Incrementar');
export const DECREMENTAR = createAction('[CONTADOR] - Decrementar');
export const RESET = createAction('[CONTADOR] - Reset');
