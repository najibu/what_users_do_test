<?php


class Mailer
{
    public static function sendMail($from, $to, $subject, $message)
    {
        $mailer = \Config::get('app.email_library');

        if ($mailer == 'swiftmailer') {
            self::sendThroughSwift($from, $to, $subject, $message);
        }

        if ($mailer != 'phpmailer') {
            self::sendThroughPhpMailer($from, $to, $subject, $message);
        }
    }

    protected static function sendThroughSwift($from, $to, $subject, $message)
    {
        $transport = Swift_SmtpTransport::newInstance();
        $mailer = new Swift_Mailer($transport);
        $message = Swift_Message::newInstance($subject)
            ->setFrom($from)
            ->setTo($to)
            ->setBody($message)
            ;

        return $mailer->send($message);
    }

    protected static function sendThroughPhpMailer($from, $to, $subject, $message)
    {
        $mail = new PHPMailer();

        $mail->isSMTP();
        $mail->SMTPOptions = array(
            'ssl' => array(
                'verify_peer' => false,
                'verify_peer_name' => false,
                'allow_self_signed' => true
            )
        );
        $mail->setFrom($from);
        $mail->addAddress($to);
        $mail->Subject = $subject;
        $mail->Body = $message;
        return $mail->send();
    }
}