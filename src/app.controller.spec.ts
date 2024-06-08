import { Test, TestingModule } from '@nestjs/testing';
// imports classes that provide utilities for creating and managing test modules in nestjs
import { AppController } from './app.controller';
import { AppService } from './app.service';
describe('AppController', () => {
  let appController: AppController;
  // describe will group related tests

  beforeEach(async () => {
    // sets up the testing envirement before each individual tests
    const app: TestingModule = await Test.createTestingModule({
      // creates a new testing module ensuring that the compilation
      // is complete before moving to the next step
      controllers: [AppController],
      //specifies that the AppController should be included in the testing mod
      providers: [AppService],
      // specifies that the AppService should be included in the testing mod
      // & specifies that AppCpntroller depends on App Service
    }).compile();

    appController = app.get<AppController>(AppController);
    //retrieves an instance of AppController from compiled testing modand assigns
    //it the app controller variable which will be used in the tests.
  });

  describe('root', () => {
    //creates a endpoint for the nested suite named root
    it('should return "Hello World!"', () => {
      // function defines the individual test case
      expect(appController.getData()).toBe('Hello World!');
      // checks the appController method.
    });
  });
});
