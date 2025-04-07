<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class QuerySubmitted extends Mailable
{
    use Queueable, SerializesModels;

   public $query;

    public function __construct($query)
    {
        $this->query = $query;
    }

    public function build()
    {
        return $this->subject('New Query Submitted')
                    ->view('query_email_format')
                    ->with(['query' => $this->query]);
    }
}
