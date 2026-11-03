# Original character artwork

Asset: `assets/leaders.png`. Generated using the built-in image-generation tool for World Leaders Showdown, then integrated as a six-cell canvas sprite atlas. No reference-site artwork was copied. Canvas silhouette paths isolate the heads at render time; the PNG is retained as generated.

## Generation prompt

Use case: stylized-concept. Asset type: one unified sprite atlas for an original lighthearted political parody fighting game. Create exactly SIX isolated caricature HEADS ONLY, including hair, ears, beard if appropriate, and short neck; NO shoulders, NO bodies, NO text. Transparent background. A precise 3 columns by 2 rows grid, six equal 512x512 cells in a 1536x1024 image. Center each head in its cell with generous transparent padding. All heads occupy roughly 75 percent cell height, fully visible, facing slightly to the RIGHT in three-quarter view, eyes looking right. Top row left to right: Donald Trump with distinctive swept golden hair and expressive brows; Narendra Modi with white hair, full white beard and rimless glasses; Vladimir Putin with receding pale brown hair and distinctive face. Bottom row left to right: Giorgia Meloni with shoulder-length golden blonde hair and blue eyes; Emmanuel Macron with short brown hair and clean-shaven face; Xi Jinping with swept black hair and recognizable face. Consistent premium hand-painted 3D cartoon videogame caricature style, exaggerated recognizable proportions, warm skin, subtle realistic facial modeling, crisp clean silhouettes, soft studio lighting from top-left, strong dark contour, vivid but tasteful colors. Confident playful competitive expressions, no anger or injury. Original art, no logos, no flags, no accessories except Modi's glasses. Evenly sized heads, exactly one head per cell, each completely inside its own cell.

## Follow-up prompt

Remove the entire brown/gray background from this six-head sprite atlas. Make background genuinely transparent alpha, no colored backdrop, no gradients, no shadow outside the silhouettes. Preserve the six illustrated heads exactly, same 3 columns by 2 rows positions, same dimensions, no changes to faces or grid. Cut cleanly around hair, ears, chins, glasses and necks. This is a transparent PNG game sprite atlas.

The returned image retained its backdrop, so the game uses explicit silhouette clipping while drawing. This does not affect gameplay and avoids modifying the source painting.
