(function() {var implementors = {};
implementors["ra_db"] = [{text:"impl&lt;DB&gt; QueryFunction&lt;DB&gt; for <a class=\"struct\" href=\"ra_db/struct.ParseQuery.html\" title=\"struct ra_db::ParseQuery\">ParseQuery</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: <a class=\"trait\" href=\"ra_db/trait.SourceDatabase.html\" title=\"trait ra_db::SourceDatabase\">SourceDatabase</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: HasQueryGroup&lt;<a class=\"struct\" href=\"ra_db/struct.SourceDatabaseStorage.html\" title=\"struct ra_db::SourceDatabaseStorage\">SourceDatabaseStorage</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: Database,&nbsp;</span>",synthetic:false,types:["ra_db::ParseQuery"]},{text:"impl&lt;DB&gt; QueryFunction&lt;DB&gt; for <a class=\"struct\" href=\"ra_db/struct.SourceRootCratesQuery.html\" title=\"struct ra_db::SourceRootCratesQuery\">SourceRootCratesQuery</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: <a class=\"trait\" href=\"ra_db/trait.SourceDatabaseExt.html\" title=\"trait ra_db::SourceDatabaseExt\">SourceDatabaseExt</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: HasQueryGroup&lt;<a class=\"struct\" href=\"ra_db/struct.SourceDatabaseExtStorage.html\" title=\"struct ra_db::SourceDatabaseExtStorage\">SourceDatabaseExtStorage</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: Database,&nbsp;</span>",synthetic:false,types:["ra_db::SourceRootCratesQuery"]},];
implementors["ra_hir_def"] = [{text:"impl&lt;DB&gt; QueryFunction&lt;DB&gt; for <a class=\"struct\" href=\"ra_hir_def/db/struct.RawItemsQuery.html\" title=\"struct ra_hir_def::db::RawItemsQuery\">RawItemsQuery</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: <a class=\"trait\" href=\"ra_hir_def/db/trait.DefDatabase.html\" title=\"trait ra_hir_def::db::DefDatabase\">DefDatabase</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: HasQueryGroup&lt;<a class=\"struct\" href=\"ra_hir_def/db/struct.DefDatabaseStorage.html\" title=\"struct ra_hir_def::db::DefDatabaseStorage\">DefDatabaseStorage</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: Database,&nbsp;</span>",synthetic:false,types:["ra_hir_def::db::RawItemsQuery"]},{text:"impl&lt;DB&gt; QueryFunction&lt;DB&gt; for <a class=\"struct\" href=\"ra_hir_def/db/struct.CrateDefMapQuery.html\" title=\"struct ra_hir_def::db::CrateDefMapQuery\">CrateDefMapQuery</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: <a class=\"trait\" href=\"ra_hir_def/db/trait.DefDatabase.html\" title=\"trait ra_hir_def::db::DefDatabase\">DefDatabase</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: HasQueryGroup&lt;<a class=\"struct\" href=\"ra_hir_def/db/struct.DefDatabaseStorage.html\" title=\"struct ra_hir_def::db::DefDatabaseStorage\">DefDatabaseStorage</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: Database,&nbsp;</span>",synthetic:false,types:["ra_hir_def::db::CrateDefMapQuery"]},{text:"impl&lt;DB&gt; QueryFunction&lt;DB&gt; for <a class=\"struct\" href=\"ra_hir_def/db/struct.StructDataQuery.html\" title=\"struct ra_hir_def::db::StructDataQuery\">StructDataQuery</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: <a class=\"trait\" href=\"ra_hir_def/db/trait.DefDatabase.html\" title=\"trait ra_hir_def::db::DefDatabase\">DefDatabase</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: HasQueryGroup&lt;<a class=\"struct\" href=\"ra_hir_def/db/struct.DefDatabaseStorage.html\" title=\"struct ra_hir_def::db::DefDatabaseStorage\">DefDatabaseStorage</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: Database,&nbsp;</span>",synthetic:false,types:["ra_hir_def::db::StructDataQuery"]},{text:"impl&lt;DB&gt; QueryFunction&lt;DB&gt; for <a class=\"struct\" href=\"ra_hir_def/db/struct.UnionDataQuery.html\" title=\"struct ra_hir_def::db::UnionDataQuery\">UnionDataQuery</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: <a class=\"trait\" href=\"ra_hir_def/db/trait.DefDatabase.html\" title=\"trait ra_hir_def::db::DefDatabase\">DefDatabase</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: HasQueryGroup&lt;<a class=\"struct\" href=\"ra_hir_def/db/struct.DefDatabaseStorage.html\" title=\"struct ra_hir_def::db::DefDatabaseStorage\">DefDatabaseStorage</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: Database,&nbsp;</span>",synthetic:false,types:["ra_hir_def::db::UnionDataQuery"]},{text:"impl&lt;DB&gt; QueryFunction&lt;DB&gt; for <a class=\"struct\" href=\"ra_hir_def/db/struct.EnumDataQuery.html\" title=\"struct ra_hir_def::db::EnumDataQuery\">EnumDataQuery</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: <a class=\"trait\" href=\"ra_hir_def/db/trait.DefDatabase.html\" title=\"trait ra_hir_def::db::DefDatabase\">DefDatabase</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: HasQueryGroup&lt;<a class=\"struct\" href=\"ra_hir_def/db/struct.DefDatabaseStorage.html\" title=\"struct ra_hir_def::db::DefDatabaseStorage\">DefDatabaseStorage</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: Database,&nbsp;</span>",synthetic:false,types:["ra_hir_def::db::EnumDataQuery"]},{text:"impl&lt;DB&gt; QueryFunction&lt;DB&gt; for <a class=\"struct\" href=\"ra_hir_def/db/struct.ImplDataQuery.html\" title=\"struct ra_hir_def::db::ImplDataQuery\">ImplDataQuery</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: <a class=\"trait\" href=\"ra_hir_def/db/trait.DefDatabase.html\" title=\"trait ra_hir_def::db::DefDatabase\">DefDatabase</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: HasQueryGroup&lt;<a class=\"struct\" href=\"ra_hir_def/db/struct.DefDatabaseStorage.html\" title=\"struct ra_hir_def::db::DefDatabaseStorage\">DefDatabaseStorage</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: Database,&nbsp;</span>",synthetic:false,types:["ra_hir_def::db::ImplDataQuery"]},{text:"impl&lt;DB&gt; QueryFunction&lt;DB&gt; for <a class=\"struct\" href=\"ra_hir_def/db/struct.TraitDataQuery.html\" title=\"struct ra_hir_def::db::TraitDataQuery\">TraitDataQuery</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: <a class=\"trait\" href=\"ra_hir_def/db/trait.DefDatabase.html\" title=\"trait ra_hir_def::db::DefDatabase\">DefDatabase</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: HasQueryGroup&lt;<a class=\"struct\" href=\"ra_hir_def/db/struct.DefDatabaseStorage.html\" title=\"struct ra_hir_def::db::DefDatabaseStorage\">DefDatabaseStorage</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: Database,&nbsp;</span>",synthetic:false,types:["ra_hir_def::db::TraitDataQuery"]},{text:"impl&lt;DB&gt; QueryFunction&lt;DB&gt; for <a class=\"struct\" href=\"ra_hir_def/db/struct.TypeAliasDataQuery.html\" title=\"struct ra_hir_def::db::TypeAliasDataQuery\">TypeAliasDataQuery</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: <a class=\"trait\" href=\"ra_hir_def/db/trait.DefDatabase.html\" title=\"trait ra_hir_def::db::DefDatabase\">DefDatabase</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: HasQueryGroup&lt;<a class=\"struct\" href=\"ra_hir_def/db/struct.DefDatabaseStorage.html\" title=\"struct ra_hir_def::db::DefDatabaseStorage\">DefDatabaseStorage</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: Database,&nbsp;</span>",synthetic:false,types:["ra_hir_def::db::TypeAliasDataQuery"]},{text:"impl&lt;DB&gt; QueryFunction&lt;DB&gt; for <a class=\"struct\" href=\"ra_hir_def/db/struct.FunctionDataQuery.html\" title=\"struct ra_hir_def::db::FunctionDataQuery\">FunctionDataQuery</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: <a class=\"trait\" href=\"ra_hir_def/db/trait.DefDatabase.html\" title=\"trait ra_hir_def::db::DefDatabase\">DefDatabase</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: HasQueryGroup&lt;<a class=\"struct\" href=\"ra_hir_def/db/struct.DefDatabaseStorage.html\" title=\"struct ra_hir_def::db::DefDatabaseStorage\">DefDatabaseStorage</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: Database,&nbsp;</span>",synthetic:false,types:["ra_hir_def::db::FunctionDataQuery"]},{text:"impl&lt;DB&gt; QueryFunction&lt;DB&gt; for <a class=\"struct\" href=\"ra_hir_def/db/struct.ConstDataQuery.html\" title=\"struct ra_hir_def::db::ConstDataQuery\">ConstDataQuery</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: <a class=\"trait\" href=\"ra_hir_def/db/trait.DefDatabase.html\" title=\"trait ra_hir_def::db::DefDatabase\">DefDatabase</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: HasQueryGroup&lt;<a class=\"struct\" href=\"ra_hir_def/db/struct.DefDatabaseStorage.html\" title=\"struct ra_hir_def::db::DefDatabaseStorage\">DefDatabaseStorage</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: Database,&nbsp;</span>",synthetic:false,types:["ra_hir_def::db::ConstDataQuery"]},{text:"impl&lt;DB&gt; QueryFunction&lt;DB&gt; for <a class=\"struct\" href=\"ra_hir_def/db/struct.StaticDataQuery.html\" title=\"struct ra_hir_def::db::StaticDataQuery\">StaticDataQuery</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: <a class=\"trait\" href=\"ra_hir_def/db/trait.DefDatabase.html\" title=\"trait ra_hir_def::db::DefDatabase\">DefDatabase</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: HasQueryGroup&lt;<a class=\"struct\" href=\"ra_hir_def/db/struct.DefDatabaseStorage.html\" title=\"struct ra_hir_def::db::DefDatabaseStorage\">DefDatabaseStorage</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: Database,&nbsp;</span>",synthetic:false,types:["ra_hir_def::db::StaticDataQuery"]},{text:"impl&lt;DB&gt; QueryFunction&lt;DB&gt; for <a class=\"struct\" href=\"ra_hir_def/db/struct.BodyWithSourceMapQuery.html\" title=\"struct ra_hir_def::db::BodyWithSourceMapQuery\">BodyWithSourceMapQuery</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: <a class=\"trait\" href=\"ra_hir_def/db/trait.DefDatabase.html\" title=\"trait ra_hir_def::db::DefDatabase\">DefDatabase</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: HasQueryGroup&lt;<a class=\"struct\" href=\"ra_hir_def/db/struct.DefDatabaseStorage.html\" title=\"struct ra_hir_def::db::DefDatabaseStorage\">DefDatabaseStorage</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: Database,&nbsp;</span>",synthetic:false,types:["ra_hir_def::db::BodyWithSourceMapQuery"]},{text:"impl&lt;DB&gt; QueryFunction&lt;DB&gt; for <a class=\"struct\" href=\"ra_hir_def/db/struct.BodyQuery.html\" title=\"struct ra_hir_def::db::BodyQuery\">BodyQuery</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: <a class=\"trait\" href=\"ra_hir_def/db/trait.DefDatabase.html\" title=\"trait ra_hir_def::db::DefDatabase\">DefDatabase</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: HasQueryGroup&lt;<a class=\"struct\" href=\"ra_hir_def/db/struct.DefDatabaseStorage.html\" title=\"struct ra_hir_def::db::DefDatabaseStorage\">DefDatabaseStorage</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: Database,&nbsp;</span>",synthetic:false,types:["ra_hir_def::db::BodyQuery"]},{text:"impl&lt;DB&gt; QueryFunction&lt;DB&gt; for <a class=\"struct\" href=\"ra_hir_def/db/struct.ExprScopesQuery.html\" title=\"struct ra_hir_def::db::ExprScopesQuery\">ExprScopesQuery</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: <a class=\"trait\" href=\"ra_hir_def/db/trait.DefDatabase.html\" title=\"trait ra_hir_def::db::DefDatabase\">DefDatabase</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: HasQueryGroup&lt;<a class=\"struct\" href=\"ra_hir_def/db/struct.DefDatabaseStorage.html\" title=\"struct ra_hir_def::db::DefDatabaseStorage\">DefDatabaseStorage</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: Database,&nbsp;</span>",synthetic:false,types:["ra_hir_def::db::ExprScopesQuery"]},{text:"impl&lt;DB&gt; QueryFunction&lt;DB&gt; for <a class=\"struct\" href=\"ra_hir_def/db/struct.GenericParamsQuery.html\" title=\"struct ra_hir_def::db::GenericParamsQuery\">GenericParamsQuery</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: <a class=\"trait\" href=\"ra_hir_def/db/trait.DefDatabase.html\" title=\"trait ra_hir_def::db::DefDatabase\">DefDatabase</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: HasQueryGroup&lt;<a class=\"struct\" href=\"ra_hir_def/db/struct.DefDatabaseStorage.html\" title=\"struct ra_hir_def::db::DefDatabaseStorage\">DefDatabaseStorage</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: Database,&nbsp;</span>",synthetic:false,types:["ra_hir_def::db::GenericParamsQuery"]},{text:"impl&lt;DB&gt; QueryFunction&lt;DB&gt; for <a class=\"struct\" href=\"ra_hir_def/db/struct.AttrsQuery.html\" title=\"struct ra_hir_def::db::AttrsQuery\">AttrsQuery</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: <a class=\"trait\" href=\"ra_hir_def/db/trait.DefDatabase.html\" title=\"trait ra_hir_def::db::DefDatabase\">DefDatabase</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: HasQueryGroup&lt;<a class=\"struct\" href=\"ra_hir_def/db/struct.DefDatabaseStorage.html\" title=\"struct ra_hir_def::db::DefDatabaseStorage\">DefDatabaseStorage</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: Database,&nbsp;</span>",synthetic:false,types:["ra_hir_def::db::AttrsQuery"]},{text:"impl&lt;DB&gt; QueryFunction&lt;DB&gt; for <a class=\"struct\" href=\"ra_hir_def/db/struct.ModuleLangItemsQuery.html\" title=\"struct ra_hir_def::db::ModuleLangItemsQuery\">ModuleLangItemsQuery</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: <a class=\"trait\" href=\"ra_hir_def/db/trait.DefDatabase.html\" title=\"trait ra_hir_def::db::DefDatabase\">DefDatabase</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: HasQueryGroup&lt;<a class=\"struct\" href=\"ra_hir_def/db/struct.DefDatabaseStorage.html\" title=\"struct ra_hir_def::db::DefDatabaseStorage\">DefDatabaseStorage</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: Database,&nbsp;</span>",synthetic:false,types:["ra_hir_def::db::ModuleLangItemsQuery"]},{text:"impl&lt;DB&gt; QueryFunction&lt;DB&gt; for <a class=\"struct\" href=\"ra_hir_def/db/struct.CrateLangItemsQuery.html\" title=\"struct ra_hir_def::db::CrateLangItemsQuery\">CrateLangItemsQuery</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: <a class=\"trait\" href=\"ra_hir_def/db/trait.DefDatabase.html\" title=\"trait ra_hir_def::db::DefDatabase\">DefDatabase</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: HasQueryGroup&lt;<a class=\"struct\" href=\"ra_hir_def/db/struct.DefDatabaseStorage.html\" title=\"struct ra_hir_def::db::DefDatabaseStorage\">DefDatabaseStorage</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: Database,&nbsp;</span>",synthetic:false,types:["ra_hir_def::db::CrateLangItemsQuery"]},{text:"impl&lt;DB&gt; QueryFunction&lt;DB&gt; for <a class=\"struct\" href=\"ra_hir_def/db/struct.LangItemQuery.html\" title=\"struct ra_hir_def::db::LangItemQuery\">LangItemQuery</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: <a class=\"trait\" href=\"ra_hir_def/db/trait.DefDatabase.html\" title=\"trait ra_hir_def::db::DefDatabase\">DefDatabase</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: HasQueryGroup&lt;<a class=\"struct\" href=\"ra_hir_def/db/struct.DefDatabaseStorage.html\" title=\"struct ra_hir_def::db::DefDatabaseStorage\">DefDatabaseStorage</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: Database,&nbsp;</span>",synthetic:false,types:["ra_hir_def::db::LangItemQuery"]},{text:"impl&lt;DB&gt; QueryFunction&lt;DB&gt; for <a class=\"struct\" href=\"ra_hir_def/db/struct.DocumentationQuery.html\" title=\"struct ra_hir_def::db::DocumentationQuery\">DocumentationQuery</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: <a class=\"trait\" href=\"ra_hir_def/db/trait.DefDatabase.html\" title=\"trait ra_hir_def::db::DefDatabase\">DefDatabase</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: HasQueryGroup&lt;<a class=\"struct\" href=\"ra_hir_def/db/struct.DefDatabaseStorage.html\" title=\"struct ra_hir_def::db::DefDatabaseStorage\">DefDatabaseStorage</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: Database,&nbsp;</span>",synthetic:false,types:["ra_hir_def::db::DocumentationQuery"]},];
implementors["ra_hir_expand"] = [{text:"impl&lt;DB&gt; QueryFunction&lt;DB&gt; for <a class=\"struct\" href=\"ra_hir_expand/db/struct.AstIdMapQuery.html\" title=\"struct ra_hir_expand::db::AstIdMapQuery\">AstIdMapQuery</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: <a class=\"trait\" href=\"ra_hir_expand/db/trait.AstDatabase.html\" title=\"trait ra_hir_expand::db::AstDatabase\">AstDatabase</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: HasQueryGroup&lt;<a class=\"struct\" href=\"ra_hir_expand/db/struct.AstDatabaseStorage.html\" title=\"struct ra_hir_expand::db::AstDatabaseStorage\">AstDatabaseStorage</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: Database,&nbsp;</span>",synthetic:false,types:["ra_hir_expand::db::AstIdMapQuery"]},{text:"impl&lt;DB&gt; QueryFunction&lt;DB&gt; for <a class=\"struct\" href=\"ra_hir_expand/db/struct.MacroArgQuery.html\" title=\"struct ra_hir_expand::db::MacroArgQuery\">MacroArgQuery</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: <a class=\"trait\" href=\"ra_hir_expand/db/trait.AstDatabase.html\" title=\"trait ra_hir_expand::db::AstDatabase\">AstDatabase</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: HasQueryGroup&lt;<a class=\"struct\" href=\"ra_hir_expand/db/struct.AstDatabaseStorage.html\" title=\"struct ra_hir_expand::db::AstDatabaseStorage\">AstDatabaseStorage</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: Database,&nbsp;</span>",synthetic:false,types:["ra_hir_expand::db::MacroArgQuery"]},{text:"impl&lt;DB&gt; QueryFunction&lt;DB&gt; for <a class=\"struct\" href=\"ra_hir_expand/db/struct.MacroDefQuery.html\" title=\"struct ra_hir_expand::db::MacroDefQuery\">MacroDefQuery</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: <a class=\"trait\" href=\"ra_hir_expand/db/trait.AstDatabase.html\" title=\"trait ra_hir_expand::db::AstDatabase\">AstDatabase</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: HasQueryGroup&lt;<a class=\"struct\" href=\"ra_hir_expand/db/struct.AstDatabaseStorage.html\" title=\"struct ra_hir_expand::db::AstDatabaseStorage\">AstDatabaseStorage</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: Database,&nbsp;</span>",synthetic:false,types:["ra_hir_expand::db::MacroDefQuery"]},{text:"impl&lt;DB&gt; QueryFunction&lt;DB&gt; for <a class=\"struct\" href=\"ra_hir_expand/db/struct.ParseMacroQuery.html\" title=\"struct ra_hir_expand::db::ParseMacroQuery\">ParseMacroQuery</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: <a class=\"trait\" href=\"ra_hir_expand/db/trait.AstDatabase.html\" title=\"trait ra_hir_expand::db::AstDatabase\">AstDatabase</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: HasQueryGroup&lt;<a class=\"struct\" href=\"ra_hir_expand/db/struct.AstDatabaseStorage.html\" title=\"struct ra_hir_expand::db::AstDatabaseStorage\">AstDatabaseStorage</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: Database,&nbsp;</span>",synthetic:false,types:["ra_hir_expand::db::ParseMacroQuery"]},{text:"impl&lt;DB&gt; QueryFunction&lt;DB&gt; for <a class=\"struct\" href=\"ra_hir_expand/db/struct.MacroExpandQuery.html\" title=\"struct ra_hir_expand::db::MacroExpandQuery\">MacroExpandQuery</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: <a class=\"trait\" href=\"ra_hir_expand/db/trait.AstDatabase.html\" title=\"trait ra_hir_expand::db::AstDatabase\">AstDatabase</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: HasQueryGroup&lt;<a class=\"struct\" href=\"ra_hir_expand/db/struct.AstDatabaseStorage.html\" title=\"struct ra_hir_expand::db::AstDatabaseStorage\">AstDatabaseStorage</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: Database,&nbsp;</span>",synthetic:false,types:["ra_hir_expand::db::MacroExpandQuery"]},];
implementors["ra_hir_ty"] = [{text:"impl&lt;DB&gt; QueryFunction&lt;DB&gt; for <a class=\"struct\" href=\"ra_hir_ty/db/struct.InferQuery.html\" title=\"struct ra_hir_ty::db::InferQuery\">InferQuery</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: <a class=\"trait\" href=\"ra_hir_ty/db/trait.HirDatabase.html\" title=\"trait ra_hir_ty::db::HirDatabase\">HirDatabase</a> + Database,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: HasQueryGroup&lt;<a class=\"struct\" href=\"ra_hir_ty/db/struct.HirDatabaseStorage.html\" title=\"struct ra_hir_ty::db::HirDatabaseStorage\">HirDatabaseStorage</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: Database,&nbsp;</span>",synthetic:false,types:["ra_hir_ty::db::InferQuery"]},{text:"impl&lt;DB&gt; QueryFunction&lt;DB&gt; for <a class=\"struct\" href=\"ra_hir_ty/db/struct.TyQuery.html\" title=\"struct ra_hir_ty::db::TyQuery\">TyQuery</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: <a class=\"trait\" href=\"ra_hir_ty/db/trait.HirDatabase.html\" title=\"trait ra_hir_ty::db::HirDatabase\">HirDatabase</a> + Database,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: HasQueryGroup&lt;<a class=\"struct\" href=\"ra_hir_ty/db/struct.HirDatabaseStorage.html\" title=\"struct ra_hir_ty::db::HirDatabaseStorage\">HirDatabaseStorage</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: Database,&nbsp;</span>",synthetic:false,types:["ra_hir_ty::db::TyQuery"]},{text:"impl&lt;DB&gt; QueryFunction&lt;DB&gt; for <a class=\"struct\" href=\"ra_hir_ty/db/struct.ValueTyQuery.html\" title=\"struct ra_hir_ty::db::ValueTyQuery\">ValueTyQuery</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: <a class=\"trait\" href=\"ra_hir_ty/db/trait.HirDatabase.html\" title=\"trait ra_hir_ty::db::HirDatabase\">HirDatabase</a> + Database,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: HasQueryGroup&lt;<a class=\"struct\" href=\"ra_hir_ty/db/struct.HirDatabaseStorage.html\" title=\"struct ra_hir_ty::db::HirDatabaseStorage\">HirDatabaseStorage</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: Database,&nbsp;</span>",synthetic:false,types:["ra_hir_ty::db::ValueTyQuery"]},{text:"impl&lt;DB&gt; QueryFunction&lt;DB&gt; for <a class=\"struct\" href=\"ra_hir_ty/db/struct.ImplSelfTyQuery.html\" title=\"struct ra_hir_ty::db::ImplSelfTyQuery\">ImplSelfTyQuery</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: <a class=\"trait\" href=\"ra_hir_ty/db/trait.HirDatabase.html\" title=\"trait ra_hir_ty::db::HirDatabase\">HirDatabase</a> + Database,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: HasQueryGroup&lt;<a class=\"struct\" href=\"ra_hir_ty/db/struct.HirDatabaseStorage.html\" title=\"struct ra_hir_ty::db::HirDatabaseStorage\">HirDatabaseStorage</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: Database,&nbsp;</span>",synthetic:false,types:["ra_hir_ty::db::ImplSelfTyQuery"]},{text:"impl&lt;DB&gt; QueryFunction&lt;DB&gt; for <a class=\"struct\" href=\"ra_hir_ty/db/struct.ImplTraitQuery.html\" title=\"struct ra_hir_ty::db::ImplTraitQuery\">ImplTraitQuery</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: <a class=\"trait\" href=\"ra_hir_ty/db/trait.HirDatabase.html\" title=\"trait ra_hir_ty::db::HirDatabase\">HirDatabase</a> + Database,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: HasQueryGroup&lt;<a class=\"struct\" href=\"ra_hir_ty/db/struct.HirDatabaseStorage.html\" title=\"struct ra_hir_ty::db::HirDatabaseStorage\">HirDatabaseStorage</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: Database,&nbsp;</span>",synthetic:false,types:["ra_hir_ty::db::ImplTraitQuery"]},{text:"impl&lt;DB&gt; QueryFunction&lt;DB&gt; for <a class=\"struct\" href=\"ra_hir_ty/db/struct.FieldTypesQuery.html\" title=\"struct ra_hir_ty::db::FieldTypesQuery\">FieldTypesQuery</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: <a class=\"trait\" href=\"ra_hir_ty/db/trait.HirDatabase.html\" title=\"trait ra_hir_ty::db::HirDatabase\">HirDatabase</a> + Database,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: HasQueryGroup&lt;<a class=\"struct\" href=\"ra_hir_ty/db/struct.HirDatabaseStorage.html\" title=\"struct ra_hir_ty::db::HirDatabaseStorage\">HirDatabaseStorage</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: Database,&nbsp;</span>",synthetic:false,types:["ra_hir_ty::db::FieldTypesQuery"]},{text:"impl&lt;DB&gt; QueryFunction&lt;DB&gt; for <a class=\"struct\" href=\"ra_hir_ty/db/struct.CallableItemSignatureQuery.html\" title=\"struct ra_hir_ty::db::CallableItemSignatureQuery\">CallableItemSignatureQuery</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: <a class=\"trait\" href=\"ra_hir_ty/db/trait.HirDatabase.html\" title=\"trait ra_hir_ty::db::HirDatabase\">HirDatabase</a> + Database,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: HasQueryGroup&lt;<a class=\"struct\" href=\"ra_hir_ty/db/struct.HirDatabaseStorage.html\" title=\"struct ra_hir_ty::db::HirDatabaseStorage\">HirDatabaseStorage</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: Database,&nbsp;</span>",synthetic:false,types:["ra_hir_ty::db::CallableItemSignatureQuery"]},{text:"impl&lt;DB&gt; QueryFunction&lt;DB&gt; for <a class=\"struct\" href=\"ra_hir_ty/db/struct.GenericPredicatesForParamQuery.html\" title=\"struct ra_hir_ty::db::GenericPredicatesForParamQuery\">GenericPredicatesForParamQuery</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: <a class=\"trait\" href=\"ra_hir_ty/db/trait.HirDatabase.html\" title=\"trait ra_hir_ty::db::HirDatabase\">HirDatabase</a> + Database,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: HasQueryGroup&lt;<a class=\"struct\" href=\"ra_hir_ty/db/struct.HirDatabaseStorage.html\" title=\"struct ra_hir_ty::db::HirDatabaseStorage\">HirDatabaseStorage</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: Database,&nbsp;</span>",synthetic:false,types:["ra_hir_ty::db::GenericPredicatesForParamQuery"]},{text:"impl&lt;DB&gt; QueryFunction&lt;DB&gt; for <a class=\"struct\" href=\"ra_hir_ty/db/struct.GenericPredicatesQuery.html\" title=\"struct ra_hir_ty::db::GenericPredicatesQuery\">GenericPredicatesQuery</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: <a class=\"trait\" href=\"ra_hir_ty/db/trait.HirDatabase.html\" title=\"trait ra_hir_ty::db::HirDatabase\">HirDatabase</a> + Database,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: HasQueryGroup&lt;<a class=\"struct\" href=\"ra_hir_ty/db/struct.HirDatabaseStorage.html\" title=\"struct ra_hir_ty::db::HirDatabaseStorage\">HirDatabaseStorage</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: Database,&nbsp;</span>",synthetic:false,types:["ra_hir_ty::db::GenericPredicatesQuery"]},{text:"impl&lt;DB&gt; QueryFunction&lt;DB&gt; for <a class=\"struct\" href=\"ra_hir_ty/db/struct.GenericDefaultsQuery.html\" title=\"struct ra_hir_ty::db::GenericDefaultsQuery\">GenericDefaultsQuery</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: <a class=\"trait\" href=\"ra_hir_ty/db/trait.HirDatabase.html\" title=\"trait ra_hir_ty::db::HirDatabase\">HirDatabase</a> + Database,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: HasQueryGroup&lt;<a class=\"struct\" href=\"ra_hir_ty/db/struct.HirDatabaseStorage.html\" title=\"struct ra_hir_ty::db::HirDatabaseStorage\">HirDatabaseStorage</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: Database,&nbsp;</span>",synthetic:false,types:["ra_hir_ty::db::GenericDefaultsQuery"]},{text:"impl&lt;DB&gt; QueryFunction&lt;DB&gt; for <a class=\"struct\" href=\"ra_hir_ty/db/struct.ImplsInCrateQuery.html\" title=\"struct ra_hir_ty::db::ImplsInCrateQuery\">ImplsInCrateQuery</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: <a class=\"trait\" href=\"ra_hir_ty/db/trait.HirDatabase.html\" title=\"trait ra_hir_ty::db::HirDatabase\">HirDatabase</a> + Database,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: HasQueryGroup&lt;<a class=\"struct\" href=\"ra_hir_ty/db/struct.HirDatabaseStorage.html\" title=\"struct ra_hir_ty::db::HirDatabaseStorage\">HirDatabaseStorage</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: Database,&nbsp;</span>",synthetic:false,types:["ra_hir_ty::db::ImplsInCrateQuery"]},{text:"impl&lt;DB&gt; QueryFunction&lt;DB&gt; for <a class=\"struct\" href=\"ra_hir_ty/db/struct.ImplsForTraitQuery.html\" title=\"struct ra_hir_ty::db::ImplsForTraitQuery\">ImplsForTraitQuery</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: <a class=\"trait\" href=\"ra_hir_ty/db/trait.HirDatabase.html\" title=\"trait ra_hir_ty::db::HirDatabase\">HirDatabase</a> + Database,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: HasQueryGroup&lt;<a class=\"struct\" href=\"ra_hir_ty/db/struct.HirDatabaseStorage.html\" title=\"struct ra_hir_ty::db::HirDatabaseStorage\">HirDatabaseStorage</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: Database,&nbsp;</span>",synthetic:false,types:["ra_hir_ty::db::ImplsForTraitQuery"]},{text:"impl&lt;DB&gt; QueryFunction&lt;DB&gt; for <a class=\"struct\" href=\"ra_hir_ty/db/struct.TraitSolverQuery.html\" title=\"struct ra_hir_ty::db::TraitSolverQuery\">TraitSolverQuery</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: <a class=\"trait\" href=\"ra_hir_ty/db/trait.HirDatabase.html\" title=\"trait ra_hir_ty::db::HirDatabase\">HirDatabase</a> + Database,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: HasQueryGroup&lt;<a class=\"struct\" href=\"ra_hir_ty/db/struct.HirDatabaseStorage.html\" title=\"struct ra_hir_ty::db::HirDatabaseStorage\">HirDatabaseStorage</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: Database,&nbsp;</span>",synthetic:false,types:["ra_hir_ty::db::TraitSolverQuery"]},{text:"impl&lt;DB&gt; QueryFunction&lt;DB&gt; for <a class=\"struct\" href=\"ra_hir_ty/db/struct.AssociatedTyDataQuery.html\" title=\"struct ra_hir_ty::db::AssociatedTyDataQuery\">AssociatedTyDataQuery</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: <a class=\"trait\" href=\"ra_hir_ty/db/trait.HirDatabase.html\" title=\"trait ra_hir_ty::db::HirDatabase\">HirDatabase</a> + Database,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: HasQueryGroup&lt;<a class=\"struct\" href=\"ra_hir_ty/db/struct.HirDatabaseStorage.html\" title=\"struct ra_hir_ty::db::HirDatabaseStorage\">HirDatabaseStorage</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: Database,&nbsp;</span>",synthetic:false,types:["ra_hir_ty::db::AssociatedTyDataQuery"]},{text:"impl&lt;DB&gt; QueryFunction&lt;DB&gt; for <a class=\"struct\" href=\"ra_hir_ty/db/struct.TraitDatumQuery.html\" title=\"struct ra_hir_ty::db::TraitDatumQuery\">TraitDatumQuery</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: <a class=\"trait\" href=\"ra_hir_ty/db/trait.HirDatabase.html\" title=\"trait ra_hir_ty::db::HirDatabase\">HirDatabase</a> + Database,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: HasQueryGroup&lt;<a class=\"struct\" href=\"ra_hir_ty/db/struct.HirDatabaseStorage.html\" title=\"struct ra_hir_ty::db::HirDatabaseStorage\">HirDatabaseStorage</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: Database,&nbsp;</span>",synthetic:false,types:["ra_hir_ty::db::TraitDatumQuery"]},{text:"impl&lt;DB&gt; QueryFunction&lt;DB&gt; for <a class=\"struct\" href=\"ra_hir_ty/db/struct.StructDatumQuery.html\" title=\"struct ra_hir_ty::db::StructDatumQuery\">StructDatumQuery</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: <a class=\"trait\" href=\"ra_hir_ty/db/trait.HirDatabase.html\" title=\"trait ra_hir_ty::db::HirDatabase\">HirDatabase</a> + Database,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: HasQueryGroup&lt;<a class=\"struct\" href=\"ra_hir_ty/db/struct.HirDatabaseStorage.html\" title=\"struct ra_hir_ty::db::HirDatabaseStorage\">HirDatabaseStorage</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: Database,&nbsp;</span>",synthetic:false,types:["ra_hir_ty::db::StructDatumQuery"]},{text:"impl&lt;DB&gt; QueryFunction&lt;DB&gt; for <a class=\"struct\" href=\"ra_hir_ty/db/struct.ImplDatumQuery.html\" title=\"struct ra_hir_ty::db::ImplDatumQuery\">ImplDatumQuery</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: <a class=\"trait\" href=\"ra_hir_ty/db/trait.HirDatabase.html\" title=\"trait ra_hir_ty::db::HirDatabase\">HirDatabase</a> + Database,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: HasQueryGroup&lt;<a class=\"struct\" href=\"ra_hir_ty/db/struct.HirDatabaseStorage.html\" title=\"struct ra_hir_ty::db::HirDatabaseStorage\">HirDatabaseStorage</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: Database,&nbsp;</span>",synthetic:false,types:["ra_hir_ty::db::ImplDatumQuery"]},{text:"impl&lt;DB&gt; QueryFunction&lt;DB&gt; for <a class=\"struct\" href=\"ra_hir_ty/db/struct.AssociatedTyValueQuery.html\" title=\"struct ra_hir_ty::db::AssociatedTyValueQuery\">AssociatedTyValueQuery</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: <a class=\"trait\" href=\"ra_hir_ty/db/trait.HirDatabase.html\" title=\"trait ra_hir_ty::db::HirDatabase\">HirDatabase</a> + Database,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: HasQueryGroup&lt;<a class=\"struct\" href=\"ra_hir_ty/db/struct.HirDatabaseStorage.html\" title=\"struct ra_hir_ty::db::HirDatabaseStorage\">HirDatabaseStorage</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: Database,&nbsp;</span>",synthetic:false,types:["ra_hir_ty::db::AssociatedTyValueQuery"]},{text:"impl&lt;DB&gt; QueryFunction&lt;DB&gt; for <a class=\"struct\" href=\"ra_hir_ty/db/struct.TraitSolveQuery.html\" title=\"struct ra_hir_ty::db::TraitSolveQuery\">TraitSolveQuery</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: <a class=\"trait\" href=\"ra_hir_ty/db/trait.HirDatabase.html\" title=\"trait ra_hir_ty::db::HirDatabase\">HirDatabase</a> + Database,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: HasQueryGroup&lt;<a class=\"struct\" href=\"ra_hir_ty/db/struct.HirDatabaseStorage.html\" title=\"struct ra_hir_ty::db::HirDatabaseStorage\">HirDatabaseStorage</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: Database,&nbsp;</span>",synthetic:false,types:["ra_hir_ty::db::TraitSolveQuery"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        })()