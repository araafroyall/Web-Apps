// jni/secrets-lib.cpp
#include <jni.h>
#include <string>

// TODO: REPLACE these chunks with your real GitHub token parts
static std::string getGithubToken() {
    const char* p1 = "ghp_ABC";   // part 1
    const char* p2 = "123DEF";    // part 2
    const char* p3 = "456XYZ";    // part 3

    std::string t(p1);
    t += p2;
    t += p3;
    return t;
}

// JNI function name must match your Java package+class+method
// Here we assume:
//   package com.native.secure;
//   class   NativeSecrets;
//   method  githubToken()
extern "C"
JNIEXPORT jstring JNICALL
Java_com_native_secure_NativeSecrets_githubToken(
        JNIEnv* env,
        jclass /*clazz*/) {

    std::string token = getGithubToken();
    return env->NewStringUTF(token.c_str());
}