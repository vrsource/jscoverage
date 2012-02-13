#!/bin/bash

# Extract the source package (ex: jscoverage-0.5.1.tar.bz2)
# Put it overtop of jscoverage
# Run this script

set -o errexit   # Exit immediately on error
if [[ $0 == '/'* ]]; then 
  CUR_DIR=`dirname $0`
else 
  CUR_DIR="`pwd`"/"`dirname $0`" 
fi

os=`uname -s`
if [ "$os" = "Darwin" ] ; then
   INSTALL_DIR="osx"
else
   INSTALL_DIR="linux"
fi

PREFIX="${CUR_DIR}/${INSTALL_DIR}"

cd jscoverage
./configure --prefix=$PREFIX --exec-prefix=$PREFIX
make
make install

