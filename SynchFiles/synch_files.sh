file1="/mnt/c/bla/test/test.txt"
file2="/mnt/c/test/test.txt"


last_modified_file1=`stat -c "%Y" $file1`
last_modified_file2=`stat -c "%Y" $file2`

echo $last_modified_file1
echo $last_modified_file2

# Check if file1 exists
if [[ -f "$file1" && -f "$file2" ]]; then
    if [[ "$last_modified_file1" -gt "$last_modified_file2" ]]; then
    echo "$file1 ist neuer als $file2"
    cp "$file1" "$file2"
    echo "$file2 wurde aktualisiert"

    elif [[ "$last_modified_file2" -gt "$last_modified_file1" ]]; then
        echo "$file2 ist neuer als $file1"
        cp "$file2" "$file1"
        echo "$file1 wurde aktualisiert"

    else
        echo "$file1 und $file2 sind gleich alt"
    fi
else 
    echo "Eine der Dateien existiert nicht"    
fi
