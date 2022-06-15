const graphNodesLinks = {}
    queue()
   .defer(d3.csv, "asoiaf_nodes_prop.csv")
   .defer(d3.csv, "asoiaf_edges_decomposition.csv")
   .await(function(error, file1, file2) {prepareData(file1, file2);});
function prepareData(nodes, edges) {
      graphNodesLinks.nodes = nodes;
      graphNodesLinks.links = edges;
 }