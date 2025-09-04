class EmailService {
    sendEmail(to, message) {
        console.log(`Sending email to ${to} with message: ${message}`);
    }
}

class SMSService {
    sendSMS(to, message) {
        console.log(`Sending SMS to ${to} with message: ${message}`);
    }
}

class PushNotificationService {
    sendPushNotification(to, message) {
        console.log(`Sending push notification to ${to} with message: ${message}`);
    }
}

class NotificationFacade {
    constructor(emailService, smsService, pushNotificationService) {
        this.emailService = new EmailService();
        this.smsService = new SMSService();
        this.pushNotificationService = new PushNotificationService();
    }

    sendNotification(type, to, message) {
        switch (type) {
            case 'email':
                this.emailService.sendEmail(to, message);
                break;
            case 'sms':
                this.smsService.sendSMS(to, message);
                break;
            case 'push':
                this.pushNotificationService.sendPushNotification(to, message);
                break;
            default:
                throw new Error('Invalid notification type');
        }
    }
}

const notificationFacade = new NotificationFacade();

notificationFacade.sendNotification('email', 'test@test.com', 'Hello, world!');
notificationFacade.sendNotification('sms', '+5511999999999', 'Hello, world!');
notificationFacade.sendNotification('push', 'test@test.com', 'Hello, world!');