import { signIn, signUp, signSucess, signFailure, passRecovery, signOut,
    SIGN_IN, SIGN_UP, SIGN_SUCCESS, SIGN_FAILURE, PASS_RECOVERY, SIGN_OUT } from '../SignActions';

describe('actions', () => {
    describe('sign in', () => {
        it('should return expected data', () => {
            const expectedData = {
                type: SIGN_IN,
                payload: {
                    path: 'signin',
                    a: 1
                }
            }
            expect(signIn({a : 1})).toEqual(expectedData);
        });
    });

    describe('sign up', () => {
        it('should return expected data', () => {
            const expectedData = {
                type: SIGN_UP,
                payload: {
                    path: 'signup',
                    a: 1
                }
            }
            expect(signUp({a : 1})).toEqual(expectedData);
        });
    });

    describe('sign success', () => {
        it('should return expected data', () => {
            const expectedData = {
                type: SIGN_SUCCESS,
                user: { a : 1 }
            }
            expect(signSucess({a : 1})).toEqual(expectedData);
        });
    });

    describe('sign failure', () => {
        it('should return expected data', () => {
            const expectedData = {
                type: SIGN_FAILURE,
                data: { a: 1 }
            }
            expect(signFailure({a : 1})).toEqual(expectedData);
        });
    });

    describe('pass recovery', () => {
        it('should return expected data', () => {
            const expectedData = {
                type: PASS_RECOVERY,
                payload: {
                    path: 'passrecovery',
                    email: 'emails'
                }
            }
            expect(passRecovery({ email: 'emails' })).toEqual(expectedData);
        });
    });

    describe('sign out', () => {
        it('should return expected data', () => {
            expect(signOut().type).toEqual(SIGN_OUT);
        });
    });
});
