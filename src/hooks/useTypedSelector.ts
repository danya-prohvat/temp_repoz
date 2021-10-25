import { TypedUseSelectorHook, useSelector as defaultuseSelector } from 'react-redux';
import { RootState } from 'store/store';

export const useSelector: TypedUseSelectorHook<RootState> = defaultuseSelector;
