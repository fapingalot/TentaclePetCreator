WORK_DIR=$(realpath $(dirname $0))
NODE_PATH=$(realpath $WORK_DIR/../node_modules)


cd $WORK_DIR
for fn in `cat packages.txt`; do
    cd "$WORK_DIR" && rm -rf $fn
    for file in `find "$NODE_PATH/$fn/" -name "*.scss"`; do
        DEST_FILE=${file#$NODE_PATH/}
        DEST_FOLDER=$(dirname $DEST_FILE)

        cd $WORK_DIR
        [[ ! -e "$DEST_FOLDER" ]] && mkdir -p "$DEST_FOLDER"

        REL_LINK=$(realpath --relative-to="$DEST_FOLDER" $file)

        cd $DEST_FOLDER
        ln -s $REL_LINK $(basename $DEST_FILE)
    done
done