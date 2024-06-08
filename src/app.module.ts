import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User, UserSchema } from './schemas/email.schema';

// setup mongoDB Connection where APPModule is connected to mongoDB with Mongoose

@Module({
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://kairui0619:LwbkvIq1TwRNYY47@cluster0.prtrj0r.mongodb.net/email-database',
    ),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
})
export class AppModule {}
