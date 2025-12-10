LOCAL_PATH := $(call my-dir)

include $(CLEAR_VARS)
LOCAL_MODULE    := secrets        # output lib name -> libsecrets.so
LOCAL_SRC_FILES := secrets-lib.cpp
LOCAL_LDLIBS    := -llog
include $(BUILD_SHARED_LIBRARY)