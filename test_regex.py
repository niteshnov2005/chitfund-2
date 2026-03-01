import re
from openpyxl.utils.cell import coordinate_to_tuple

formulas = [
    '=VLOOKUP(CONCATENATE(A3,"|",B3),$O$3:$P$16,2,FALSE)',
    '=VLOOKUP(CONCATENATE(F3,"|",G3),$O$3:$P$20,2,FALSE)',
    '=VLOOKUP(A3&"|"&B3,$O$3:$P$16,2,FALSE)'
]

pattern = r'VLOOKUP\((?:CONCATENATE\(([A-Z]+)([0-9]+)\s*,\s*\"\|\"\s*,\s*([A-Z]+)([0-9]+)\)|([A-Z]+)([0-9]+)\s*\&\s*\"\|\"\s*\&\s*([A-Z]+)([0-9]+))\s*,\s*\$?([A-Z]+)\$?([0-9]+):\$?([A-Z]+)\$?([0-9]+)\s*,\s*2\s*,\s*FALSE\)'

for f in formulas:
    match = re.search(pattern, f)
    if match:
        print(f"Matched: {f}")
        groups = match.groups()
        # Extract correct matched groups depending on which alternation matched
        if groups[0] is not None:
            col1, row1, col2, row2 = groups[0], groups[1], groups[2], groups[3]
        else:
            col1, row1, col2, row2 = groups[4], groups[5], groups[6], groups[7]
            
        start_col, start_row, end_col, end_row = groups[8], groups[9], groups[10], groups[11]
        
        print(f"Col1: {col1}, Row1: {row1}, Col2: {col2}, Row2: {row2}")
        print(f"Lookup Range: {start_col}{start_row} to {end_col}{end_row}")
    else:
        print(f"No match for: {f}")

