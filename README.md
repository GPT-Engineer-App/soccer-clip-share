# soccer-clip-share

propose visual desig for follwing app:
== Background

The Soccer Game Video Clips Sharing Web App is designed to cater to soccer enthusiasts who want to share and view memorable moments from soccer games. Users can register and authenticate using popular OAuth providers, ensuring a secure and straightforward login process. Once authenticated, users can upload video clips corresponding to specific moments in a soccer game, which are then displayed on a timeline-based interface for easy navigation.

The backend of the application is developed using the FastAPI framework in Python, providing a robust and scalable REST API for the frontend. This choice ensures rapid development and high performance, catering to the needs of a growing user base.

Users will also be able to playback the video clips. If there are multiple clips corresponding to the same moment, they can be played simultaneously to provide a comprehensive view of that moment from different perspectives.

== Requirements

=== Must Have
* User registration and authentication using OAuth protocols (Google, Facebook, Twitter).
* Secure login process with session management.
* Ability for users to upload video clips related to a selected soccer game.
* Display a list of available games for selection.
* Timeline-based interface displaying icons representing video clips for a selected game.
* Playback functionality for video clips.
* Simultaneous playback of multiple clips corresponding to the same moment.
* Commenting and rating system for video clips.
* Sharing functionality on social media platforms.
* Notifications for new clips uploaded for followed games.
* Users will be able to like and unlike clips
* User must have fibality metric form 0 to 10
* User could be regula or admin
* Admin user can add and remove other users accounts
* Video clips could be liked or Unliked by the users


=== Should Have
* User profile management.
* Basic search functionality to find games and clips.
* Responsive design for mobile and desktop.

=== Could Have
* Advanced search functionality with filters.
* Personalization features based on user preferences.

=== Won't Have
* Live streaming of ongoing games (at least in the initial MVP).

== Method

### Architecture Design

1. **Frontend**
    - Framework: React.js
    - Features: Authentication, Game Selection, Video Upload, Timeline Navigation, Playback, Commenting, Rating, Sharing, Notifications

2. **Backend**
    - Framework: FastAPI (Python)
    - REST API Endpoints:
        - `/auth/login`: User authentication via OAuth
        - `/auth/logout`: User logout
        - `/users/{user_id}`: User profile management
        - `/games`: List available games
        - `/games/{game_id}/clips`: Upload and retrieve video clips
        - `/clips/{clip_id}/comments`: Comment on clips
        - `/clips/{clip_id}/ratings`: Rate clips
        - `/clips/{clip_id}/share`: Share clips
        - `/notifications`: Manage notifications
	- `/users/{user_id}`:  create or Update when POST or get info when GET or delete users 

3. **Database**
    - Type: PostgreSQL
    - Schemas:
        - `users`: User information and OAuth credentials
        - `games`: Game metadata
        - `clips`: Video clips metadata (timestamps, uploader, game reference)
        - `comments`: User comments on clips
        - `ratings`: User ratings for clips
        - `notifications`: User notifications settings and log

4. **Storage**
    - Service: AWS S3 or equivalent
    - Use: Storing video clips

5. **Authentication**
    - Service: OAuth 2.0 providers (Google, Facebook, Twitter)
    - Implementation: Using third-party libraries (e.g., Authlib)

6. **Notifications**
    - Mechanism: Email and/or push notifications
    - Service: AWS SNS or Firebase Cloud Messaging



## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/soccer-clip-share.git
cd soccer-clip-share
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
