import { combineReducers, Reducer } from '@reduxjs/toolkit'
import { spawn } from 'redux-saga/effects'
import { deepLinkWatcher } from 'src/features/deepLinking/handleDeepLink'
import { firebaseDataWatcher } from 'src/features/firebase/firebaseData'
import { initFirebase } from 'src/features/firebase/initFirebaseSaga'
import {
  importAccountActions,
  importAccountReducer,
  importAccountSaga,
  importAccountSagaName,
} from 'src/features/import/importAccountSaga'
import { notificationWatcher } from 'src/features/notifications/notificationWatcher'
import { initProviders } from 'src/features/providers/providerSaga'
import {
  swapActions,
  swapReducer,
  swapSaga,
  swapSagaName,
} from 'src/features/transactions/swap/swapSaga'
import {
  tokenWrapActions,
  tokenWrapReducer,
  tokenWrapSaga,
  tokenWrapSagaName,
} from 'src/features/transactions/swap/wrapSaga'
import { transactionWatcher } from 'src/features/transactions/transactionWatcherSaga'
import {
  transferTokenActions,
  transferTokenReducer,
  transferTokenSaga,
  transferTokenSagaName,
} from 'src/features/transactions/transfer/transferTokenSaga'
import {
  createAccountActions,
  createAccountReducer,
  createAccountSaga,
  createAccountSagaName,
} from 'src/features/wallet/createAccountSaga'
import {
  editAccountActions,
  editAccountReducer,
  editAccountSaga,
  editAccountSagaName,
} from 'src/features/wallet/editAccountSaga'
import {
  ledgerActions,
  ledgerReducer,
  ledgerSaga,
  ledgerSagaName,
} from 'src/features/wallet/ledgerSaga'
import {
  pendingAccountActions,
  pendingAccountReducer,
  pendingAccountSaga,
  pendingAccountSagaName,
} from 'src/features/wallet/pendingAcccountsSaga'
import { signWcRequestSaga, walletConnectSaga } from 'src/features/walletConnect/saga'
import { SagaActions, SagaState } from 'src/utils/saga'

// All regular sagas must be included here
const sagas: any[] = [
  initProviders,
  initFirebase,
  deepLinkWatcher,
  transactionWatcher,
  firebaseDataWatcher,
  notificationWatcher,
  walletConnectSaga,
  signWcRequestSaga,
]

interface MonitoredSaga {
  name: string
  wrappedSaga: any
  reducer: Reducer<SagaState>
  actions: SagaActions
}

// All monitored sagas must be included here
export const monitoredSagas: {
  [name: string]: MonitoredSaga
} = {
  [createAccountSagaName]: {
    name: createAccountSagaName,
    wrappedSaga: createAccountSaga,
    reducer: createAccountReducer,
    actions: createAccountActions,
  },
  [editAccountSagaName]: {
    name: editAccountSagaName,
    wrappedSaga: editAccountSaga,
    reducer: editAccountReducer,
    actions: editAccountActions,
  },
  [importAccountSagaName]: {
    name: importAccountSagaName,
    wrappedSaga: importAccountSaga,
    reducer: importAccountReducer,
    actions: importAccountActions,
  },
  [ledgerSagaName]: {
    name: ledgerSagaName,
    wrappedSaga: ledgerSaga,
    reducer: ledgerReducer,
    actions: ledgerActions,
  },
  [pendingAccountSagaName]: {
    name: pendingAccountSagaName,
    wrappedSaga: pendingAccountSaga,
    reducer: pendingAccountReducer,
    actions: pendingAccountActions,
  },
  [transferTokenSagaName]: {
    name: transferTokenSagaName,
    wrappedSaga: transferTokenSaga,
    reducer: transferTokenReducer,
    actions: transferTokenActions,
  },
  [swapSagaName]: {
    name: swapSagaName,
    wrappedSaga: swapSaga,
    reducer: swapReducer,
    actions: swapActions,
  },
  [tokenWrapSagaName]: {
    name: tokenWrapSagaName,
    wrappedSaga: tokenWrapSaga,
    reducer: tokenWrapReducer,
    actions: tokenWrapActions,
  },
}

type MonitoredSagaReducer = Reducer<Record<string, SagaState>>
export const monitoredSagaReducers: MonitoredSagaReducer = combineReducers(
  Object.keys(monitoredSagas).reduce(
    (acc: { [name: string]: Reducer<SagaState> }, sagaName: string) => {
      acc[sagaName] = monitoredSagas[sagaName].reducer
      return acc
    },
    {}
  )
)

export function* rootSaga() {
  for (const s of sagas) {
    yield spawn(s)
  }
  for (const m of Object.values(monitoredSagas)) {
    yield spawn(m.wrappedSaga)
  }
}
