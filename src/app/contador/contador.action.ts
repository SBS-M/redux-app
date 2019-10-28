import { Action } from '@ngrx/store';


export const INCREMENTAR = '[contador] Incrementar';
export const DECREMENTAR = '[contador] Decrementar';
export const MULTIPLICAR = '[contador] Multiplicar';
export const DIVIDIR = '[contador] Dividir';


export class IncrementarAction implements Action {
    readonly type = INCREMENTAR;
}

export class DecrementarAction implements Action {
    readonly type = DECREMENTAR;
}

export class MultiplicarAction implements Action {
    readonly type = MULTIPLICAR;
}

export class DividirAction implements Action {
    readonly type = DIVIDIR;
}

export type actions = IncrementarAction |
    DecrementarAction | MultiplicarAction;