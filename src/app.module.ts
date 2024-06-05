import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://kairui0619:LwbkvIq1TwRNYY47@cluster0.prtrj0r.mongodb.net/email-database',
    ),
  ],
})
export class AppModule {}
