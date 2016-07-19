import passport from 'passport';
import {Strategy as FacebookStrategy} from 'passport-facebook';

export function setup(User, config) {
  passport.use(new FacebookStrategy({
    clientID: config.facebook.clientID,
    clientSecret: config.facebook.clientSecret,
    callbackURL: config.facebook.callbackURL,
    profileFields: [
      // 'displayName',
      'first_name',
      'last_name',
      'birthday',
      'emails',
      'picture.type(large)'
    ]
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOne({'facebook.id': profile.id}).exec()
      .then(user => {
        if (user) {
          return done(null, user);
        }

        user = new User({
          // my own code
          firstName: profile._json.first_name,
          lastName: profile._json.last_name,
          address: undefined,
          birthday: profile._json.birthday,
          picture: profile._json.photos ? profile.photos[0].value : '/img/faces/unknown-user-pic.jpg',
          email: profile.emails[0].value,
          phone: undefined,
          role: 'user',
          provider: 'facebook',
          facebook: profile._json
        });
        user.save()
          .then(user => done(null, user))
          .catch(err => done(err));
      })
      .catch(err => done(err));
  }));
}
