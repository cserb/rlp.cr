crystal_doc_search_index_callback({"repository_name":"github.com/q9f/rlp.cr","body":"# rlp.cr\n\n[![Build Status](https://img.shields.io/github/workflow/status/q9f/rlp.cr/Nightly)](https://github.com/q9f/rlp.cr/actions)\n[![Documentation](https://img.shields.io/badge/docs-html-black)](https://q9f.github.io/rlp.cr/)\n[![Release](https://img.shields.io/github/v/release/q9f/rlp.cr?include_prereleases&color=black)](https://github.com/q9f/rlp.cr/releases/latest)\n[![Language](https://img.shields.io/github/languages/top/q9f/rlp.cr?color=black)](https://github.com/q9f/rlp.cr/search?l=crystal)\n[![License](https://img.shields.io/github/license/q9f/rlp.cr.svg?color=black)](LICENSE)\n\na native library implementing `rlp` purely for the crystal language. `rlp` is ethereum's recursive length prefix used to encode arbitray data structures.\n\nthis library allows for rlp-encoding of:\n* binary data (assumed encoded)\n* boolean values (true, false)\n* scalars (positive integers)\n* string literals and characters\n* arrays containing any of the above\n* nested arrays containing any of the above\n\nthis library allows for decoding of:\n* rlp-encoded data in binary format\n* rlp-encoded data in hexadecimal string format\n\nnote, that decoded data is always binary as per ethereum's design rationale:\n\n> _\"RLP does not attempt to define any specific data types such as booleans, floats, doubles or even integers; instead, it simply exists to store structure, in the form of nested arrays, and leaves it up to the protocol to determine the meaning of the arrays\"_\n\n# installation\n\nadd the `rlp` library to your `shard.yml`\n\n```yaml\ndependencies:\n  rlp:\n    github: q9f/rlp.cr\n    version: \"~> 0.1\"\n```\n\n# usage\n\n```crystal\n# import rlp\nrequire \"rlp\"\n```\n\nthis library exposes the following modules (in logical order):\n\n* `Rlp`: core library exposing `encode` and `decode` logic\n* `Rlp::Util`: a collection of utilities to ease the conversion between data types\n* `Rlp::RecursiveArray`: is a data type alias allowing for arrays of unknown nesting depth\n\nbasic usage:\n\n```crystal\n# rlp-encode a string\nrlp = Rlp.encode \"A cat with a short string.\"\n# => Bytes[154, 65, 32, 99, 97, 116, 32, 119, 105, 116, 104, 32, 97, 32, 115, 104, 111, 114, 116, 32, 115, 116, 114, 105, 110, 103, 46]\n\n# (optionally) get a hex representation of the rlp-encoded data\nhex = Rlp::Util.bin_to_hex rlp\n# => \"9a4120636174207769746820612073686f727420737472696e672e\"\n\n# decode the rlp data\nbin = Rlp.decode hex\n# => Bytes[65, 32, 99, 97, 116, 32, 119, 105, 116, 104, 32, 97, 32, 115, 104, 111, 114, 116, 32, 115, 116, 114, 105, 110, 103, 46]\n\n# we expect a string, so we can try to convert it here\nstr = Rlp::Util.bin_to_str bin\n# => \"A cat with a short string.\"\n```\n\n# documentation\n\nthe full library documentation can be found here: [q9f.github.io/rlp.cr](https://q9f.github.io/rlp.cr/)\n\ngenerate a local copy with:\n\n```\ncrystal docs\n```\n\n# testing\n\nthe library is entirely specified through tests in `./spec`; run:\n\n```bash\ncrystal spec --verbose\n```\n\n# understand\n\nrecursive length prefixes are used by the ethereum protocol to store arbitrary data structures, e.g., signed transactions, and is a fundamental serialization used by ethereum's networking protocol `devp2p` which implements `rlpx`, the _recursive length prefix transfer protocol_.\n\n`rlp` can encode any data and data structure. the resulting data is a serialized byte-stream containing prefix bytes, header data, and actual data depending on the type and size of the encoded data.\n\n```crystal\nRlp.encode [42, \"eth\"]\n# => Bytes[197, 42, 131, 101, 116, 104]\n```\n\ndeserialization of `rlp`-encoded byte-streams allows for recovering the underlying data structure. however, `rlp` is kept minimalistic in its specification and is therefore agnostic to the data types used in the structures.\n\n```crystal\nRlp.decode Bytes[197, 42, 131, 101, 116, 104]\n# => [Bytes[42], Bytes[101, 116, 104]]\n```\n\nIt's up to applications using `rlp` to further specify protocols of decoding the actual data.\n\n```crystal\ndecoded = Rlp.decode Bytes[197, 42, 131, 101, 116, 104]\nprotocol = [] of String | Int32 | BigInt\nprotocol << Rlp::Util.bin_to_int decoded[0]\nprotocol << Rlp::Util.bin_to_str decoded[1]\nprotocol\n# => [42, \"eth\"]\n```\n\n# contribute\n\ncreate a pull request, and make sure tests and linter passes.\n\nthis library with built with the help of the blog post by the mana team implementing [`rlp` in elixir](https://www.badykov.com/elixir/2018/05/06/rlp/) and coinmonks' [annotated version of the `rlp` specification](https://medium.com/coinmonks/data-structure-in-ethereum-episode-1-recursive-length-prefix-rlp-encoding-decoding-d1016832f919). ethereum classic's [`rlp` article](https://ethereumclassic.org/blog/2018-03-19-rlp/) allows for some sweet test cases.\n\nlicense: apache license v2.0\n\ncontributors: [**@q9f**](https://github.com/q9f/)\n","program":{"html_id":"github.com/q9f/rlp.cr/toplevel","path":"toplevel.html","kind":"module","full_name":"Top Level Namespace","name":"Top Level Namespace","abstract":false,"superclass":null,"ancestors":[],"locations":[],"repository_name":"github.com/q9f/rlp.cr","program":true,"enum":false,"alias":false,"aliased":"","const":false,"constants":[],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":null,"doc":null,"summary":null,"class_methods":[],"constructors":[],"instance_methods":[],"macros":[],"types":[{"html_id":"github.com/q9f/rlp.cr/Rlp","path":"Rlp.html","kind":"module","full_name":"Rlp","name":"Rlp","abstract":false,"superclass":null,"ancestors":[],"locations":[{"filename":"array.cr","line_number":17,"url":"https://github.com/q9f/rlp.cr/blob/add231443cc20017ffba223665e6a3d3dcd19f32/src/array.cr"},{"filename":"constants.cr","line_number":17,"url":"https://github.com/q9f/rlp.cr/blob/add231443cc20017ffba223665e6a3d3dcd19f32/src/constants.cr"},{"filename":"rlp.cr","line_number":23,"url":"https://github.com/q9f/rlp.cr/blob/add231443cc20017ffba223665e6a3d3dcd19f32/src/rlp.cr"},{"filename":"version.cr","line_number":17,"url":"https://github.com/q9f/rlp.cr/blob/add231443cc20017ffba223665e6a3d3dcd19f32/src/version.cr"}],"repository_name":"github.com/q9f/rlp.cr","program":false,"enum":false,"alias":false,"aliased":"","const":false,"constants":[{"id":"EMPTY_ARRAY","name":"EMPTY_ARRAY","value":"Bytes[OFFSET_ARRAY]","doc":"An empty array is defined as `0xC0`.","summary":"<p>An empty array is defined as <code>0xC0</code>.</p>"},{"id":"EMPTY_STRING","name":"EMPTY_STRING","value":"Bytes[OFFSET_STRING]","doc":"An empty string is defined as `0x80`.","summary":"<p>An empty string is defined as <code>0x80</code>.</p>"},{"id":"LIMIT_LONG","name":"LIMIT_LONG","value":"(BigInt.new(256)) ** (BigInt.new(8))","doc":"The size limit of large data objects to be encoded is `256 ** 8`.","summary":"<p>The size limit of large data objects to be encoded is <code>256 ** 8</code>.</p>"},{"id":"LIMIT_SHORT","name":"LIMIT_SHORT","value":"56","doc":"The size limit of small data objects to be encoded is `56`.","summary":"<p>The size limit of small data objects to be encoded is <code>56</code>.</p>"},{"id":"OFFSET_ARRAY","name":"OFFSET_ARRAY","value":"192","doc":"The offset for array list encoding is `192`.","summary":"<p>The offset for array list encoding is <code>192</code>.</p>"},{"id":"OFFSET_STRING","name":"OFFSET_STRING","value":"128","doc":"The offset for string literal encoding is `128`.","summary":"<p>The offset for string literal encoding is <code>128</code>.</p>"},{"id":"VERSION","name":"VERSION","value":"\"0.1.2\"","doc":"The version of the `Rlp` module shard.","summary":"<p>The version of the <code><a href=\"Rlp.html\">Rlp</a></code> module shard.</p>"}],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":null,"doc":"The `Rlp` module implementing Ethereum's Recursive Length Prefix\nfor arbitrary data encoding and decoding.","summary":"<p>The <code><a href=\"Rlp.html\">Rlp</a></code> module implementing Ethereum's Recursive Length Prefix for arbitrary data encoding and decoding.</p>","class_methods":[{"id":"decode(rlp:Bytes)-class-method","html_id":"decode(rlp:Bytes)-class-method","name":"decode","doc":"Decodes arbitrary data structures from a given binary\nrecursive length prefix data stream.\n\nParameters:\n* `rlp` (`Bytes`): the encoded `Rlp` data to decode.\n\n```\nRlp.decode Bytes[195, 193, 192, 192]\n# => [[[]], []]\n```\n\nNOTE: The returned data only restores the data structure.\nIt's up to the protocol to determine the meaning of the data\nas defined in Ethereum's design rationale.","summary":"<p>Decodes arbitrary data structures from a given binary recursive length prefix data stream.</p>","abstract":false,"args":[{"name":"rlp","doc":null,"default_value":"","external_name":"rlp","restriction":"Bytes"}],"args_string":"(rlp : Bytes)","source_link":"https://github.com/q9f/rlp.cr/blob/add231443cc20017ffba223665e6a3d3dcd19f32/src/rlp.cr#L233","def":{"name":"decode","args":[{"name":"rlp","doc":null,"default_value":"","external_name":"rlp","restriction":"Bytes"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"if rlp === EMPTY_STRING\n  return \"\"\nelse\n  if rlp === EMPTY_ARRAY\n    return [] of RecursiveArray\n  end\nend\nprefix = rlp.first\nlength = rlp.bytesize\nif prefix < OFFSET_STRING && (length === 1)\n  return rlp\nelse\n  if prefix < (OFFSET_STRING + LIMIT_SHORT)\n    offset = 1\n    return rlp[offset, length - offset]\n  else\n    if prefix < OFFSET_ARRAY\n      offset = (1 + prefix) - 183\n      return rlp[offset, length - offset]\n    else\n      result = [] of RecursiveArray\n      if prefix < (OFFSET_ARRAY + LIMIT_SHORT)\n        offset = 1\n        rlp = rlp[offset, length - offset]\n      else\n        offset = (1 + prefix) - 247\n        rlp = rlp[offset, length - offset]\n      end\n      while rlp.bytesize > 0\n        prefix = rlp.first\n        length = 0\n        if prefix < OFFSET_STRING\n          length = 1\n        else\n          if prefix < (OFFSET_STRING + LIMIT_SHORT)\n            length = (1 + prefix) - OFFSET_STRING\n          else\n            if prefix < OFFSET_ARRAY\n              header_size = prefix - 183\n              header = rlp[1, header_size]\n              length = (1 + header_size) + (Util.bin_to_int(header))\n            else\n              if prefix < (OFFSET_ARRAY + LIMIT_SHORT)\n                length = (1 + prefix) - OFFSET_ARRAY\n              else\n                header_size = prefix - 247\n                header = rlp[1, header_size]\n                length = (1 + header_size) + (Util.bin_to_int(header))\n              end\n            end\n          end\n        end\n        result << (decode(rlp[0, length]))\n        offset = length\n        length = rlp.size - length\n        rlp = rlp[offset, length]\n      end\n      return result\n    end\n  end\nend\n"}},{"id":"decode(hex:String)-class-method","html_id":"decode(hex:String)-class-method","name":"decode","doc":"Decodes arbitrary data structures from a given hex-encoded\nrecursive length prefix data stream.\n\nParameters:\n* `hex` (`String`): the encoded `Rlp` data to decode.\n\n```\nRlp.decode \"c7c0c1c0c3c0c1c0\"\n# => [[], [[]], [[], [[]]]]\n```\n\nNOTE: The returned data only restores the data structure.\nIt's up to the protocol to determine the meaning of the data\nas defined in Ethereum's design rationale.","summary":"<p>Decodes arbitrary data structures from a given hex-encoded recursive length prefix data stream.</p>","abstract":false,"args":[{"name":"hex","doc":null,"default_value":"","external_name":"hex","restriction":"String"}],"args_string":"(hex : String)","source_link":"https://github.com/q9f/rlp.cr/blob/add231443cc20017ffba223665e6a3d3dcd19f32/src/rlp.cr#L326","def":{"name":"decode","args":[{"name":"hex","doc":null,"default_value":"","external_name":"hex","restriction":"String"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"return decode(Util.hex_to_bin(hex))"}},{"id":"encode(b:Bytes)-class-method","html_id":"encode(b:Bytes)-class-method","name":"encode","doc":"RLP-encodes binary `Bytes` data.\n\nParameters:\n* `b` (`Bytes`): the binary `Bytes` data to encode.\n\n```\nRlp.encode Bytes[15, 66, 64]\n# => Bytes[131, 15, 66, 64]\n```","summary":"<p>RLP-encodes binary <code>Bytes</code> data.</p>","abstract":false,"args":[{"name":"b","doc":null,"default_value":"","external_name":"b","restriction":"Bytes"}],"args_string":"(b : Bytes)","source_link":"https://github.com/q9f/rlp.cr/blob/add231443cc20017ffba223665e6a3d3dcd19f32/src/rlp.cr#L33","def":{"name":"encode","args":[{"name":"b","doc":null,"default_value":"","external_name":"b","restriction":"Bytes"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"if (b.bytesize === 1) && b.first < OFFSET_STRING\n  return b\nend\nif b.bytesize < LIMIT_SHORT\n  prefix = UInt8.new(b.bytesize + OFFSET_STRING)\n  p = Bytes[prefix]\n  return Util.binary_add(p, b)\nend\nif b.bytesize < LIMIT_LONG\n  data_size = b.bytesize\n  header = Util.int_to_bin(data_size)\n  prefix = UInt8.new(((header.bytesize + OFFSET_STRING) + LIMIT_SHORT) - 1)\n  p = Bytes[prefix]\n  header = Util.binary_add(p, header)\n  return Util.binary_add(header, b)\nelse\n  raise(\"Invalid data provided (size out of range: #{b.bytesize})\")\nend\n"}},{"id":"encode(l:Array)-class-method","html_id":"encode(l:Array)-class-method","name":"encode","doc":"RLP-encodes nested `Array` data.\n\nParameters:\n* `l` (`Array`): the nested `Array` data to encode.\n\n```\nRlp.encode [[\"\"], [\"\"]]\n# => Bytes[196, 193, 128, 193, 128]\n```","summary":"<p>RLP-encodes nested <code>Array</code> data.</p>","abstract":false,"args":[{"name":"l","doc":null,"default_value":"","external_name":"l","restriction":"Array"}],"args_string":"(l : Array)","source_link":"https://github.com/q9f/rlp.cr/blob/add231443cc20017ffba223665e6a3d3dcd19f32/src/rlp.cr#L87","def":{"name":"encode","args":[{"name":"l","doc":null,"default_value":"","external_name":"l","restriction":"Array"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"if l.empty?\n  return EMPTY_ARRAY\nend\nbody = Slice(UInt8).empty\nl.each do |a|\n  if body.size === 0\n    body = encode(a)\n  else\n    body = Util.binary_add(body, encode(a))\n  end\nend\nif body.bytesize < LIMIT_SHORT\n  prefix = UInt8.new(body.bytesize + OFFSET_ARRAY)\n  p = Bytes[prefix]\n  return Util.binary_add(p, body)\nend\nif body.bytesize < LIMIT_LONG\n  data_size = body.bytesize\n  header = Util.int_to_bin(data_size)\n  prefix = UInt8.new(((header.bytesize + OFFSET_ARRAY) + LIMIT_SHORT) - 1)\n  p = Bytes[prefix]\n  header = Util.binary_add(p, header)\n  return Util.binary_add(header, body)\nelse\n  raise(\"Invalid list provided (size out of range: #{body.bytesize})\")\nend\n"}},{"id":"encode(s:String)-class-method","html_id":"encode(s:String)-class-method","name":"encode","doc":"RLP-encodes `String` literals.\n\nParameters:\n* `s` (`String`): the `String` literal to encode.\n\n```\nRlp.encode \"dog\"\n# => Bytes[131, 100, 111, 103]\n```","summary":"<p>RLP-encodes <code>String</code> literals.</p>","abstract":false,"args":[{"name":"s","doc":null,"default_value":"","external_name":"s","restriction":"String"}],"args_string":"(s : String)","source_link":"https://github.com/q9f/rlp.cr/blob/add231443cc20017ffba223665e6a3d3dcd19f32/src/rlp.cr#L151","def":{"name":"encode","args":[{"name":"s","doc":null,"default_value":"","external_name":"s","restriction":"String"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"if s.empty?\n  return EMPTY_STRING\nelse\n  if s.size < LIMIT_LONG\n    return encode(Util.str_to_bin(s))\n  else\n    raise(\"Invalid string provided (size out of range: #{s.size})\")\n  end\nend"}},{"id":"encode(i:Int)-class-method","html_id":"encode(i:Int)-class-method","name":"encode","doc":"RLP-encodes scalar `Int` numbers.\n\nParameters:\n* `i` (`Int`): the scalar `Int` number to encode.\n\n```\nRlp.encode 1_000_000\n# => Bytes[131, 15, 66, 64]\n```","summary":"<p>RLP-encodes scalar <code>Int</code> numbers.</p>","abstract":false,"args":[{"name":"i","doc":null,"default_value":"","external_name":"i","restriction":"Int"}],"args_string":"(i : Int)","source_link":"https://github.com/q9f/rlp.cr/blob/add231443cc20017ffba223665e6a3d3dcd19f32/src/rlp.cr#L172","def":{"name":"encode","args":[{"name":"i","doc":null,"default_value":"","external_name":"i","restriction":"Int"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"if i === 0\n  return EMPTY_STRING\nelse\n  if i > 0 && i < LIMIT_LONG\n    return encode(Util.int_to_bin(i))\n  else\n    raise(\"Invalid scalar provided (out of range: #{i})\")\n  end\nend"}},{"id":"encode(c:Char)-class-method","html_id":"encode(c:Char)-class-method","name":"encode","doc":"RLP-encodes `Char` characters.\n\nParameters:\n* `c` (`Char`): the `Char` character to encode.\n\n```\nRlp.encode 'x'\n# => Bytes[120]\n```","summary":"<p>RLP-encodes <code>Char</code> characters.</p>","abstract":false,"args":[{"name":"c","doc":null,"default_value":"","external_name":"c","restriction":"Char"}],"args_string":"(c : Char)","source_link":"https://github.com/q9f/rlp.cr/blob/add231443cc20017ffba223665e6a3d3dcd19f32/src/rlp.cr#L195","def":{"name":"encode","args":[{"name":"c","doc":null,"default_value":"","external_name":"c","restriction":"Char"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"return encode(c.to_s)"}},{"id":"encode(o:Bool)-class-method","html_id":"encode(o:Bool)-class-method","name":"encode","doc":"RLP-encodes boolean `Bool` values.\n\nParameters:\n* `o` (`Bool`): the boolean `Bool` value to encode.\n\n```\nRlp.encode true\n# => Bytes[1]\n```","summary":"<p>RLP-encodes boolean <code>Bool</code> values.</p>","abstract":false,"args":[{"name":"o","doc":null,"default_value":"","external_name":"o","restriction":"Bool"}],"args_string":"(o : Bool)","source_link":"https://github.com/q9f/rlp.cr/blob/add231443cc20017ffba223665e6a3d3dcd19f32/src/rlp.cr#L209","def":{"name":"encode","args":[{"name":"o","doc":null,"default_value":"","external_name":"o","restriction":"Bool"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"if o\n  return Bytes[1]\nelse\n  return EMPTY_STRING\nend"}}],"constructors":[],"instance_methods":[],"macros":[],"types":[{"html_id":"github.com/q9f/rlp.cr/Rlp/RecursiveArray","path":"Rlp/RecursiveArray.html","kind":"alias","full_name":"Rlp::RecursiveArray","name":"RecursiveArray","abstract":false,"superclass":null,"ancestors":[],"locations":[{"filename":"array.cr","line_number":32,"url":"https://github.com/q9f/rlp.cr/blob/add231443cc20017ffba223665e6a3d3dcd19f32/src/array.cr"}],"repository_name":"github.com/q9f/rlp.cr","program":false,"enum":false,"alias":true,"aliased":"(Array(Rlp::RecursiveArray) | Slice(UInt8) | String)","const":false,"constants":[],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":{"html_id":"github.com/q9f/rlp.cr/Rlp","kind":"module","full_name":"Rlp","name":"Rlp"},"doc":"An recursive array alias for arrays of unknown nesting depth.\n\n```crystal\na = [] of RecursiveArray\na << \"\"\na << Bytes[128]\na << [] of RecursiveArray\n```\n\nTODO: The recursive alias might be deprecated in future,\nref: [crystal-lang/crystal#5155](https://github.com/crystal-lang/crystal/issues/5155).\nit's worth considering a custom struct holding a `@data` property\nof type `String | Bytes | Array(RecursiveArray)` and forward missing methods,\nref: [crystal-lang/crystal#8719](https://github.com/crystal-lang/crystal/issues/8719).","summary":"<p>An recursive array alias for arrays of unknown nesting depth.</p>","class_methods":[],"constructors":[],"instance_methods":[],"macros":[],"types":[]},{"html_id":"github.com/q9f/rlp.cr/Rlp/Util","path":"Rlp/Util.html","kind":"module","full_name":"Rlp::Util","name":"Util","abstract":false,"superclass":null,"ancestors":[],"locations":[{"filename":"util.cr","line_number":29,"url":"https://github.com/q9f/rlp.cr/blob/add231443cc20017ffba223665e6a3d3dcd19f32/src/util.cr"}],"repository_name":"github.com/q9f/rlp.cr","program":false,"enum":false,"alias":false,"aliased":"","const":false,"constants":[],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":{"html_id":"github.com/q9f/rlp.cr/Rlp","kind":"module","full_name":"Rlp","name":"Rlp"},"doc":"Exposes a set of utilities to ease the handling of different data types.\nIt comes in handy when building protocols further decoding RLP byte-streams.\n\n```\ndecoded = Rlp.decode Bytes[197, 42, 131, 101, 116, 104]\npp decoded\n# => [Bytes[42], Bytes[101, 116, 104]]\n\nprotocol = [] of String | Int32 | BigInt\nprotocol << Rlp::Util.bin_to_int decoded[0]\nprotocol << Rlp::Util.bin_to_str decoded[1]\npp protocol\n# => [42, \"eth\"]\n```","summary":"<p>Exposes a set of utilities to ease the handling of different data types.</p>","class_methods":[{"id":"bin_to_hex(b:Bytes)-class-method","html_id":"bin_to_hex(b:Bytes)-class-method","name":"bin_to_hex","doc":"Converts binary `Bytes` to a hex-encoded `String`.\n\nParameters:\n* `b` (`Bytes`): the binary `Bytes` data to convert.\n\n```\nRlp::Util.bin_to_hex Bytes[4, 200, 29]\n# => \"04c81d\"\n```","summary":"<p>Converts binary <code>Bytes</code> to a hex-encoded <code>String</code>.</p>","abstract":false,"args":[{"name":"b","doc":null,"default_value":"","external_name":"b","restriction":"Bytes"}],"args_string":"(b : Bytes)","source_link":"https://github.com/q9f/rlp.cr/blob/add231443cc20017ffba223665e6a3d3dcd19f32/src/util.cr#L61","def":{"name":"bin_to_hex","args":[{"name":"b","doc":null,"default_value":"","external_name":"b","restriction":"Bytes"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"h = b.hexstring\nif h.size.odd?\n  h = \"0#{h}\"\nend\nreturn h\n"}},{"id":"bin_to_int(b:Bytes)-class-method","html_id":"bin_to_int(b:Bytes)-class-method","name":"bin_to_int","doc":"Converts binary `Bytes` to a `BigInt`.\n\nParameters:\n* `b` (`Bytes`): the binary `Bytes` data to convert.\n\n```\nRlp::Util.bin_to_int Bytes[15, 66, 64]\n# => 1000000\n```","summary":"<p>Converts binary <code>Bytes</code> to a <code>BigInt</code>.</p>","abstract":false,"args":[{"name":"b","doc":null,"default_value":"","external_name":"b","restriction":"Bytes"}],"args_string":"(b : Bytes)","source_link":"https://github.com/q9f/rlp.cr/blob/add231443cc20017ffba223665e6a3d3dcd19f32/src/util.cr#L39","def":{"name":"bin_to_int","args":[{"name":"b","doc":null,"default_value":"","external_name":"b","restriction":"Bytes"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"return BigInt.new(b.hexstring, 16)"}},{"id":"bin_to_int(a)-class-method","html_id":"bin_to_int(a)-class-method","name":"bin_to_int","doc":"Overloads `bin_to_int` with arbitrary data types and raises if\ninput data is not binary.\n\nNOTE: Raises in any case if `a` actually contains non-binary or nested data.\nShouldn't be used if decoded `Rlp` data could contain nested data structures.","summary":"<p>Overloads <code><a href=\"../Rlp/Util.html#bin_to_int(b:Bytes)-class-method\">.bin_to_int</a></code> with arbitrary data types and raises if input data is not binary.</p>","abstract":false,"args":[{"name":"a","doc":null,"default_value":"","external_name":"a","restriction":""}],"args_string":"(a)","source_link":"https://github.com/q9f/rlp.cr/blob/add231443cc20017ffba223665e6a3d3dcd19f32/src/util.cr#L48","def":{"name":"bin_to_int","args":[{"name":"a","doc":null,"default_value":"","external_name":"a","restriction":""}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"raise(\"Cannot convert arbitrary data to numbers, please unpack first!\")"}},{"id":"bin_to_str(b:Bytes)-class-method","html_id":"bin_to_str(b:Bytes)-class-method","name":"bin_to_str","doc":"Converts binary `Bytes` to a `String` literal.\n\nParameters:\n* `b` (`Bytes`): the binary `Bytes` data to convert.\n\n```\nRlp::Util.bin_to_str Bytes[97, 98, 99]\n# => \"abc\"\n```","summary":"<p>Converts binary <code>Bytes</code> to a <code>String</code> literal.</p>","abstract":false,"args":[{"name":"b","doc":null,"default_value":"","external_name":"b","restriction":"Bytes"}],"args_string":"(b : Bytes)","source_link":"https://github.com/q9f/rlp.cr/blob/add231443cc20017ffba223665e6a3d3dcd19f32/src/util.cr#L76","def":{"name":"bin_to_str","args":[{"name":"b","doc":null,"default_value":"","external_name":"b","restriction":"Bytes"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"return String.new(b)"}},{"id":"bin_to_str(a)-class-method","html_id":"bin_to_str(a)-class-method","name":"bin_to_str","doc":"Overloads `bin_to_str` with arbitrary data types and raises if\ninput data is not binary.\n\nNOTE: Raises in any case if `a` actually contains non-binary or nested data.\nShouldn't be used if decoded `Rlp` data could contain nested data structures.","summary":"<p>Overloads <code><a href=\"../Rlp/Util.html#bin_to_str(b:Bytes)-class-method\">.bin_to_str</a></code> with arbitrary data types and raises if input data is not binary.</p>","abstract":false,"args":[{"name":"a","doc":null,"default_value":"","external_name":"a","restriction":""}],"args_string":"(a)","source_link":"https://github.com/q9f/rlp.cr/blob/add231443cc20017ffba223665e6a3d3dcd19f32/src/util.cr#L85","def":{"name":"bin_to_str","args":[{"name":"a","doc":null,"default_value":"","external_name":"a","restriction":""}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"raise(\"Cannot convert arbitrary data to strings, please unpack first!\")"}},{"id":"binary_add(a:Bytes,b:Bytes)-class-method","html_id":"binary_add(a:Bytes,b:Bytes)-class-method","name":"binary_add","doc":"Concatenates two `Bytes` slices of `UInt8`.\n\n```\na = Bytes[131]\nb = Bytes[97, 98, 99]\nRlp::Util.binary_add a, b\n# => Bytes[131, 97, 98, 99]\n```","summary":"<p>Concatenates two <code>Bytes</code> slices of <code>UInt8</code>.</p>","abstract":false,"args":[{"name":"a","doc":null,"default_value":"","external_name":"a","restriction":"Bytes"},{"name":"b","doc":null,"default_value":"","external_name":"b","restriction":"Bytes"}],"args_string":"(a : Bytes, b : Bytes)","source_link":"https://github.com/q9f/rlp.cr/blob/add231443cc20017ffba223665e6a3d3dcd19f32/src/util.cr#L195","def":{"name":"binary_add","args":[{"name":"a","doc":null,"default_value":"","external_name":"a","restriction":"Bytes"},{"name":"b","doc":null,"default_value":"","external_name":"b","restriction":"Bytes"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"c = IO::Memory.new(a.bytesize + b.bytesize)\na.each do |v|\n  c.write_bytes(UInt8.new(v))\nend\nb.each do |v|\n  c.write_bytes(UInt8.new(v))\nend\nreturn c.to_slice\n"}},{"id":"hex_to_bin(h:String)-class-method","html_id":"hex_to_bin(h:String)-class-method","name":"hex_to_bin","doc":"Converts hex-encoded `String`s to binary `Bytes` data.\n\nParameters:\n* `h` (`String`): the hex-encoded `String` to convert.\n\n```\nRlp::Util.hex_to_bin \"04c81d\"\n# => Bytes[4, 200, 29]\n```","summary":"<p>Converts hex-encoded <code>String</code>s to binary <code>Bytes</code> data.</p>","abstract":false,"args":[{"name":"h","doc":null,"default_value":"","external_name":"h","restriction":"String"}],"args_string":"(h : String)","source_link":"https://github.com/q9f/rlp.cr/blob/add231443cc20017ffba223665e6a3d3dcd19f32/src/util.cr#L128","def":{"name":"hex_to_bin","args":[{"name":"h","doc":null,"default_value":"","external_name":"h","restriction":"String"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"if h.size.odd?\n  h = \"0#{h}\"\nend\nreturn h.hexbytes\n"}},{"id":"hex_to_int(h:String)-class-method","html_id":"hex_to_int(h:String)-class-method","name":"hex_to_int","doc":"Converts hex-encoded `String`s to `BigInt`s.\n\nParameters:\n* `h` (`String`): the hex-encoded `String` to convert.\n\n```\nRlp::Util.hex_to_int \"04c81d\"\n# => 313373\n```","summary":"<p>Converts hex-encoded <code>String</code>s to <code>BigInt</code>s.</p>","abstract":false,"args":[{"name":"h","doc":null,"default_value":"","external_name":"h","restriction":"String"}],"args_string":"(h : String)","source_link":"https://github.com/q9f/rlp.cr/blob/add231443cc20017ffba223665e6a3d3dcd19f32/src/util.cr#L142","def":{"name":"hex_to_int","args":[{"name":"h","doc":null,"default_value":"","external_name":"h","restriction":"String"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"if h.size.odd?\n  h = \"0#{h}\"\nend\nreturn BigInt.new(h, 16)\n"}},{"id":"hex_to_str(h:String)-class-method","html_id":"hex_to_str(h:String)-class-method","name":"hex_to_str","doc":"Converts hex-encoded `String`s to `String` literals.\n\nParameters:\n* `h` (`String`): the hex-encoded `String` to convert.\n\n```\nRlp::Util.hex_to_str \"646f67\"\n# => \"dog\"\n```","summary":"<p>Converts hex-encoded <code>String</code>s to <code>String</code> literals.</p>","abstract":false,"args":[{"name":"h","doc":null,"default_value":"","external_name":"h","restriction":"String"}],"args_string":"(h : String)","source_link":"https://github.com/q9f/rlp.cr/blob/add231443cc20017ffba223665e6a3d3dcd19f32/src/util.cr#L156","def":{"name":"hex_to_str","args":[{"name":"h","doc":null,"default_value":"","external_name":"h","restriction":"String"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"if h.size.odd?\n  h = \"0#{h}\"\nend\nreturn String.new(h.hexbytes)\n"}},{"id":"int_to_bin(i:Int)-class-method","html_id":"int_to_bin(i:Int)-class-method","name":"int_to_bin","doc":"Converts integers to binary `Bytes`.\n\nParameters:\n* `i` (`Int`): the integer to convert.\n\n```\nRlp::Util.int_to_bin 1_000_000\n# => Bytes[15, 66, 64]\n```","summary":"<p>Converts integers to binary <code>Bytes</code>.</p>","abstract":false,"args":[{"name":"i","doc":null,"default_value":"","external_name":"i","restriction":"Int"}],"args_string":"(i : Int)","source_link":"https://github.com/q9f/rlp.cr/blob/add231443cc20017ffba223665e6a3d3dcd19f32/src/util.cr#L98","def":{"name":"int_to_bin","args":[{"name":"i","doc":null,"default_value":"","external_name":"i","restriction":"Int"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"h = i.to_s(16)\nif h.size.odd?\n  h = \"0#{h}\"\nend\nreturn h.hexbytes\n"}},{"id":"int_to_hex(i:Int)-class-method","html_id":"int_to_hex(i:Int)-class-method","name":"int_to_hex","doc":"Converts integers to hex-encoded `String`s.\n\nParameters:\n* `i` (`Int`): the integer to convert.\n\n```\nRlp::Util.int_to_hex 313_373\n# => \"04c81d\"\n```","summary":"<p>Converts integers to hex-encoded <code>String</code>s.</p>","abstract":false,"args":[{"name":"i","doc":null,"default_value":"","external_name":"i","restriction":"Int"}],"args_string":"(i : Int)","source_link":"https://github.com/q9f/rlp.cr/blob/add231443cc20017ffba223665e6a3d3dcd19f32/src/util.cr#L113","def":{"name":"int_to_hex","args":[{"name":"i","doc":null,"default_value":"","external_name":"i","restriction":"Int"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"h = i.to_s(16)\nif h.size.odd?\n  h = \"0#{h}\"\nend\nreturn h\n"}},{"id":"str_to_bin(s:String)-class-method","html_id":"str_to_bin(s:String)-class-method","name":"str_to_bin","doc":"Converts `String` literals to binary `Bytes` data.\n\nParameters:\n* `s` (`String`): the `String` literal to convert.\n\n```\nRlp::Util.str_to_bin \"abc\"\n# => Bytes[97, 98, 99]\n```","summary":"<p>Converts <code>String</code> literals to binary <code>Bytes</code> data.</p>","abstract":false,"args":[{"name":"s","doc":null,"default_value":"","external_name":"s","restriction":"String"}],"args_string":"(s : String)","source_link":"https://github.com/q9f/rlp.cr/blob/add231443cc20017ffba223665e6a3d3dcd19f32/src/util.cr#L170","def":{"name":"str_to_bin","args":[{"name":"s","doc":null,"default_value":"","external_name":"s","restriction":"String"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"return s.to_slice"}},{"id":"str_to_hex(s:String)-class-method","html_id":"str_to_hex(s:String)-class-method","name":"str_to_hex","doc":"Converts `String` literals to hex-encoded `String`s.\n\nParameters:\n* `s` (`String`): the `String` literal to convert.\n\n```\nRlp::Util.str_to_hex \"dog\"\n# => \"646f67\"\n```","summary":"<p>Converts <code>String</code> literals to hex-encoded <code>String</code>s.</p>","abstract":false,"args":[{"name":"s","doc":null,"default_value":"","external_name":"s","restriction":"String"}],"args_string":"(s : String)","source_link":"https://github.com/q9f/rlp.cr/blob/add231443cc20017ffba223665e6a3d3dcd19f32/src/util.cr#L183","def":{"name":"str_to_hex","args":[{"name":"s","doc":null,"default_value":"","external_name":"s","restriction":"String"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"return s.to_slice.hexstring"}}],"constructors":[],"instance_methods":[],"macros":[],"types":[]}]}]}})