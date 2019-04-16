from django.core.signing import TimestampSigner
class my_cookie(TimestampSigner):
    def sign(self,value):
        return value+'abc123'
    def unsign(self, value, max_age=None):
        return value[0:-6]
