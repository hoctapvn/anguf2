/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { MytodoComponent } from './mytodo.component';

describe('Component: Mytodo', () => {
  it('should create an instance', () => {
    let component = new MytodoComponent();
    expect(component).toBeTruthy();
  });
});
