/* eslint-disable */
/* @flow */
import type { Component, Element as ReactElement } from 'react'
import type { Dispatch as ReduxDispatch, ActionCreator as ReduxActionCreator } from 'redux'
import type { Connector as ReactReduxConnector } from 'react-redux'
import type { JsonPredicate } from 'json-predicate'

// React
type FunctionComponent<P> = (props: P) => ?ReactElement<any>
type ClassComponent<D, P, S> = Class<Component<D, P, S>>
type ReactComponent<D, P, S> = FunctionComponent<P> | ClassComponent<D, P, S>
type ReactChildren = ReactElement<*> | Array<ReactElement<*>>

// Misc
type KeyValueObject = { [key: string]: any }

// State Change
type StepFn = (values: KeyValueObject, wizardState: WizardState) => ?string
type StepPredicate = { predicate: JsonPredicate, to: string }

// Reducer
type StepConfiguration = {
  name: string,
  previous: ?string,
  next: ?string | ?Array<StepPredicate> | ?StepFn,
  finish: boolean,
}
type WizardState = {
  currentStep: string,
  stack: Array<string>,
  steps: {
    [key: string]: StepConfiguration
  },
}
type WizardsReducerState = {
  [key: string]: WizardState
}

// Actions
type FluxStandardAction<T, P> = {
  type: T,
  error?: boolean,
  payload?: P
}
type InitializeWizardAction = FluxStandardAction<'@react-redux-wizard/INITIALIZE', { name: string, firstStep: string }>
type RegisterStepAction = FluxStandardAction<'@react-redux-wizard/REGISTER_STEP', { name: string, step: { name: string } }>
type PreviousStepAction = FluxStandardAction<'@react-redux-wizard/PREVIOUS_STEP', { name: string }>
type NextStepAction = FluxStandardAction<'@react-redux-wizard/NEXT_STEP', { name: string, values: KeyValueObject }>
type DestroyWizardAction = FluxStandardAction<'@react-redux-wizard/DESTROY', { name: string }>
type WizardActions = InitializeWizardAction
                   | RegisterStepAction
                   | PreviousStepAction
                   | NextStepAction
                   | DestroyWizardAction

export type {
  ReactComponent,
  ReactElement,
  ReactChildren,
  ReduxDispatch,
  ReduxActionCreator,
  ReactReduxConnector,
  KeyValueObject,
  StepFn,
  StepPredicate,
  StepConfiguration,
  WizardState,
  WizardsReducerState,
  InitializeWizardAction,
  RegisterStepAction,
  PreviousStepAction,
  NextStepAction,
  DestroyWizardAction,
  WizardActions
}
